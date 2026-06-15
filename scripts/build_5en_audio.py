#!/home/ps/.venv/bin/python
from pathlib import Path

import lameenc
import miniaudio


BASE_DIR = Path("/home/ps/duo-mobile/mp3")
EN_DIR = BASE_DIR / "en"
OUT_DIR = BASE_DIR / "5en"
SEQUENCE = [
    ("female", "fast"),
    ("male", "slow"),
    ("female", "slow"),
    ("male", "fast"),
    ("female", "fast"),
]
MID_SILENCE_SECONDS = 6
END_SILENCE_SECONDS = 10


def collect_sentence_ids(section_dir: Path) -> list[str]:
    ids = set()
    for path in section_dir.glob("*.mp3"):
        ids.add(path.name.split("_", 1)[0])
    return sorted(ids, key=lambda value: int(value))


def load_pcm(path: Path) -> tuple[bytes, int, int, int]:
    decoded = miniaudio.decode_file(str(path))
    return bytes(decoded.samples), decoded.sample_rate, decoded.nchannels, decoded.sample_width


def make_silence(sample_rate: int, channels: int, sample_width: int, seconds: int) -> bytes:
    frame_count = sample_rate * seconds
    return b"\x00" * frame_count * channels * sample_width


def encode_mp3(pcm: bytes, sample_rate: int, channels: int, sample_width: int) -> bytes:
    if sample_width != 2:
      raise RuntimeError(f"Unsupported sample width for mp3 encoding: {sample_width}")

    encoder = lameenc.Encoder()
    encoder.set_bit_rate(128)
    encoder.set_in_sample_rate(sample_rate)
    encoder.set_channels(channels)
    encoder.set_quality(2)
    return encoder.encode(pcm) + encoder.flush()


def build_section(section_dir: Path) -> int:
    out_section_dir = OUT_DIR / section_dir.name
    out_section_dir.mkdir(parents=True, exist_ok=True)

    built = 0
    for sentence_id in collect_sentence_ids(section_dir):
        chunks = []
        sample_rate = None
        channels = None
        sample_width = None

        for idx, (voice, speed) in enumerate(SEQUENCE):
            src = section_dir / f"{sentence_id}_{voice}_{speed}.mp3"
            if not src.exists():
                raise FileNotFoundError(f"Missing source file: {src}")

            pcm, cur_rate, cur_channels, cur_width = load_pcm(src)
            if sample_rate is None:
                sample_rate = cur_rate
                channels = cur_channels
                sample_width = cur_width
            elif (sample_rate, channels, sample_width) != (cur_rate, cur_channels, cur_width):
                raise RuntimeError(f"Audio format mismatch in {src}")

            chunks.append(pcm)
            silence_seconds = END_SILENCE_SECONDS if idx == len(SEQUENCE) - 1 else MID_SILENCE_SECONDS
            chunks.append(make_silence(sample_rate, channels, sample_width, silence_seconds))

        out_path = out_section_dir / f"{sentence_id}_female_5x.mp3"
        out_path.write_bytes(encode_mp3(b"".join(chunks), sample_rate, channels, sample_width))
        built += 1

    return built


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    total = 0
    for section_dir in sorted(p for p in EN_DIR.iterdir() if p.is_dir()):
        total += build_section(section_dir)
    print(total)


if __name__ == "__main__":
    main()
