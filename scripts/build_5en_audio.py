#!/usr/bin/env python3
from pathlib import Path


BASE_DIR = Path("/home/ps/duo-mobile/mp3")
EN_DIR = BASE_DIR / "en"
OUT_DIR = BASE_DIR / "5en"
SEQUENCE = ["fast", "slow", "slow", "fast", "fast"]


def collect_sentence_ids(section_dir: Path) -> list[str]:
    ids = set()
    for path in section_dir.glob("*_female_fast.mp3"):
        ids.add(path.name.split("_", 1)[0])
    for path in section_dir.glob("*_female_slow.mp3"):
        ids.add(path.name.split("_", 1)[0])
    return sorted(ids, key=lambda value: int(value))


def build_section(section_dir: Path) -> int:
    out_section_dir = OUT_DIR / section_dir.name
    out_section_dir.mkdir(parents=True, exist_ok=True)

    built = 0
    for sentence_id in collect_sentence_ids(section_dir):
        parts = []
        for speed in SEQUENCE:
            src = section_dir / f"{sentence_id}_female_{speed}.mp3"
            if not src.exists():
                raise FileNotFoundError(f"Missing source file: {src}")
            parts.append(src.read_bytes())

        out_path = out_section_dir / f"{sentence_id}_female_5x.mp3"
        out_path.write_bytes(b"".join(parts))
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
