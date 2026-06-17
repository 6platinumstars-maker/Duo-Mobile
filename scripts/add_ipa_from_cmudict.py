#!/usr/bin/env python3
"""Add IPA strings to duo-mobile vocab entries using CMU Pronouncing Dictionary.

Source dictionary:
https://raw.githubusercontent.com/cmusphinx/cmudict/master/cmudict.dict
"""

from __future__ import annotations

import argparse
import glob
import re
from collections import defaultdict
from pathlib import Path


ARPABET_VOWELS = {
    "AA": "ɑ",
    "AE": "æ",
    "AH": ("ə", "ʌ"),
    "AO": "ɔ",
    "AW": "aʊ",
    "AY": "aɪ",
    "EH": "ɛ",
    "ER": ("ɚ", "ɝ"),
    "EY": "eɪ",
    "IH": "ɪ",
    "IY": "i",
    "OW": "oʊ",
    "OY": "ɔɪ",
    "UH": "ʊ",
    "UW": "u",
}

ARPABET_CONSONANTS = {
    "B": "b",
    "CH": "tʃ",
    "D": "d",
    "DH": "ð",
    "F": "f",
    "G": "ɡ",
    "HH": "h",
    "JH": "dʒ",
    "K": "k",
    "L": "l",
    "M": "m",
    "N": "n",
    "NG": "ŋ",
    "P": "p",
    "R": "r",
    "S": "s",
    "SH": "ʃ",
    "T": "t",
    "TH": "θ",
    "V": "v",
    "W": "w",
    "Y": "j",
    "Z": "z",
    "ZH": "ʒ",
}

TOKEN_RE = re.compile(
    r"-?[A-Za-z]+\(s\)|[A-Za-z]+-|"
    r"-?[A-Za-z]+(?:'[A-Za-z]+)?(?:-[A-Za-z]+(?:'[A-Za-z]+)?)*|"
    r"[0-9]+(?:s)?|\.{3}|~|～|/|\(|\)|,|\?|!|\.|[^\s]"
)
WORD_FIELD_RE = re.compile(
    r'word:\s*"((?:[^"\\]|\\.)*)",(?:\s*ipa:\s*"((?:[^"\\]|\\.)*)",)?(?P<gap>\s*)(?P<meaning>meaning:)'
)
LITERAL_TOKENS = {"...", "~", "～", "/", "(", ")"}


def load_cmudict(path: Path) -> dict[str, list[list[str]]]:
    cmu: dict[str, list[list[str]]] = defaultdict(list)
    with path.open(encoding="latin-1") as handle:
        for raw_line in handle:
            line = raw_line.strip()
            if not line or line.startswith(";;;"):
                continue
            parts = line.split()
            key = re.sub(r"\(\d+\)$", "", parts[0]).lower()
            cmu[key].append(parts[1:])
    return dict(cmu)


def normalize_text(text: str) -> str:
    return (
        text.replace("’", "'")
        .replace("‘", "'")
        .replace("“", '"')
        .replace("”", '"')
        .replace("…", "...")
    )


def phone_to_ipa(phone: str) -> tuple[str, str | None]:
    base = re.sub(r"\d", "", phone)
    stress_match = re.search(r"(\d)$", phone)
    stress = stress_match.group(1) if stress_match else None

    if base in ARPABET_VOWELS:
        mapping = ARPABET_VOWELS[base]
        if isinstance(mapping, tuple):
            ipa = mapping[0] if stress in (None, "0") else mapping[1]
        else:
            ipa = mapping
        return ipa, stress

    ipa = ARPABET_CONSONANTS.get(base)
    if ipa is None:
        raise KeyError(f"Unsupported ARPABET phone: {phone}")
    return ipa, None


def arpabet_to_ipa(phones: list[str]) -> str:
    syllables: list[tuple[str | None, list[str]]] = []
    pending: list[str] = []
    current: tuple[str | None, list[str]] | None = None

    for phone in phones:
        ipa, stress = phone_to_ipa(phone)
        if stress is None:
            pending.append(ipa)
            continue

        if current is not None:
            current[1].extend(pending)
            pending = []
            syllables.append(current)
        current = (stress, pending + [ipa])
        pending = []

    if current is None:
        return "".join(pending)

    current[1].extend(pending)
    syllables.append(current)

    rendered: list[str] = []
    for stress, phones_in_syllable in syllables:
        prefix = "ˈ" if stress == "1" else "ˌ" if stress == "2" else ""
        rendered.append(prefix + "".join(phones_in_syllable))
    return "".join(rendered)


def lookup_ipa(cmu: dict[str, list[list[str]]], token: str) -> str:
    normalized = normalize_text(token).lower()

    if len(token) == 1 and token in {"A", "B", "C", "D", "X"}:
        return token.upper()
    if token in LITERAL_TOKENS:
        return token

    direct = cmu.get(normalized)
    if direct:
        return arpabet_to_ipa(direct[0])

    if normalized == "1960s":
        return f"{lookup_ipa(cmu, 'nineteen')} {lookup_ipa(cmu, 'sixties')}"

    if normalized == "vcr":
        return " ".join(lookup_ipa(cmu, ch) for ch in "vcr")

    if normalized.endswith("(s)"):
        stem = normalized[:-3]
        return f"{lookup_ipa(cmu, stem)}(s)"

    if normalized.endswith("-"):
        return lookup_ipa(cmu, normalized[:-1]) + "-"
    if normalized.startswith("-"):
        return "-" + lookup_ipa(cmu, normalized[1:])

    if "-" in normalized:
        return " ".join(lookup_ipa(cmu, part) for part in normalized.split("-") if part)

    raise KeyError(token)


def render_ipa_for_phrase(cmu: dict[str, list[list[str]]], phrase: str) -> str:
    tokens = TOKEN_RE.findall(normalize_text(phrase))
    rendered: list[str] = []

    for token in tokens:
        if token in {",", "?", "!", "."}:
            continue
        rendered.append(lookup_ipa(cmu, token))

    text = " ".join(rendered)
    text = re.sub(r"\s+/\s+", " / ", text)
    text = re.sub(r"\(\s+", "(", text)
    text = re.sub(r"\s+\)", ")", text)
    text = re.sub(r"\s+", " ", text).strip()
    return f"/{text}/"


def inject_ipa_fields(path: Path, cmu: dict[str, list[list[str]]]) -> int:
    original = path.read_text(encoding="utf-8")
    added = 0

    def replace(match: re.Match[str]) -> str:
        nonlocal added
        word = match.group(1)
        ipa = render_ipa_for_phrase(cmu, word)
        added += 1
        return f'word:"{word}", ipa:"{ipa}",{match.group("gap")}{match.group("meaning")}'

    updated = WORD_FIELD_RE.sub(replace, original)
    if updated != original:
        path.write_text(updated, encoding="utf-8")
    return added


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--cmudict",
        default="/tmp/cmudict.dict",
        help="Path to cmudict.dict",
    )
    parser.add_argument(
        "--data-dir",
        default=str(Path(__file__).resolve().parents[1] / "data"),
        help="Path to the data directory",
    )
    args = parser.parse_args()

    cmu = load_cmudict(Path(args.cmudict))
    total_added = 0

    for raw_path in sorted(glob.glob(str(Path(args.data_dir) / "section*.js"))):
        total_added += inject_ipa_fields(Path(raw_path), cmu)

    print(f"Added ipa fields: {total_added}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
