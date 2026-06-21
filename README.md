# DUO Mobile

DUO 形式の英語学習用モバイル Web アプリです。  
`index.html` を起点に、Section 01〜45 の例文・単語・音声学習を行います。

## 表示仕様

- スマホと PC の画面幅に応じてレイアウトを自動調整
- スマホでは縦持ち前提のコンパクト表示
- PC ではメイン領域の横幅を広げ、カード幅も大きめに使う
- Edge を含む PC ブラウザ間で文字サイズ差が出にくいように `text-size-adjust` を固定
- PC では本文とフォーム文字をやや大きめにしつつ、ヘッダー・余白・カード高さを調整して 1 ページに収まりやすくする
- 英語例文を基準サイズとし、日本語訳と単語の日本語意味はやや小さめに調整
- 単語カードの英語見出しと発音記号は、日本語意味より大きめに表示
- 上部の 4 つの切替ボタンは PC では横 1 列で表示

## 画面構成

- `例文`
  - 最初は英文のみを表示
  - 例文エリアを 1 回タップすると `英文 + 日本語訳 + 単語` を表示
  - 例文エリアを 2 回目にタップすると次の文へ進む
  - section 最後の文で 2 回目にタップすると次の section の先頭文へ進む
  - `英語音声` ボタンを押すと、その文の女性 slow 音声を 1 回だけ再生
- `単語`
  - 日本語の意味から英単語を答える
  - 手入力モードと 4 択モードを切り替え可能
  - 正誤履歴を保存
- `英語音声`
  - 1 文ごとに 5 連結音声を再生
  - 最初から `例文 + 日本語訳 + 単語` を表示
  - 例文欄タップで表示を段階的に切り替え
  - `5連続` ボタンから 5 section 連続再生が可能
- `日本語音声`
  - 日本語音声を 1 文ずつ再生
  - 最初から `例文 + 日本語 + 単語` を表示

## 英語音声 5連続仕様

- `5連続` ボタンを押すと `1` 〜 `9` の選択ボタンを表示
- 各番号は 5 section 単位の再生範囲に対応
  - `1`: Section 01〜05
  - `2`: Section 06〜10
  - `3`: Section 11〜15
  - `4`: Section 16〜20
  - `5`: Section 21〜25
  - `6`: Section 26〜30
  - `7`: Section 31〜35
  - `8`: Section 36〜40
  - `9`: Section 41〜45
- 再生音源は各文の `5en` 単一 mp3 を使用
- 5 section の再生が終わると停止
- 再生中に `次 →` や `← 前`、`もう一回聞く` を押すと 5連続再生は停止し、その時点の section の通常再生へ戻る
- 5連続の区切りは「読み込めた section 数」ではなく Section 番号で固定する
  - `sec29` が欠けても `6` は `Section 26〜30` のまま扱う

## 例文タップ仕様

`例文` タブでは、初期状態で英文のみを表示し、例文表示エリアをタップするたびに次の順で動作します。

1. 英文 + 日本語訳 + 単語 を表示
2. 次の文へ進む

section の最後の文で 2 回目にタップした場合は、次の section の先頭文へ進みます。

## 例文タブの英語音声ボタン仕様

`例文` タブの `英語音声` ボタンでは、表示中の文の `female_slow` 音声を 1 回だけ再生します。

## 日本語音声タップ仕様

`日本語音声` タブでは、初期状態で `例文 + 単語 + 日本語` を表示し、例文表示エリアをタップするたびに次の順で表示します。

1. 単語
2. 例文 + 単語 + 日本語

## 音声仕様

### 日本語音声

- 音声ソース: `mp3/jp/<section>/<sid>_female.mp3`

### 英語音声

- 音声ソース: `mp3/5en/<section>/<sid>_female_5x.mp3`
- 1 ファイルに次の順で連結

1. Slow（女性）
2. 1 秒無音
3. Slow（女性）
4. 1 秒無音
5. Slow（男性）
6. 1 秒無音
7. Slow（男性）
8. 1 秒無音
9. Slow（女性）
10. 3 秒無音

つまり、`女性 slow → 女性 slow → 男性 slow → 男性 slow → 女性 slow` の順で 1 ファイルに連結します。

### 会話文の読み上げ

- 英語音声生成時は、ダブルクォーテーション記号 `"` `“` `”` のみ除去
- 引用符の中の本文自体はそのまま読み上げ

## データ構成

- `data/section01.js` 〜 `data/section45.js`
  - section 単位の例文・訳・単語データ
  - `vocab` 要素は `ipa` フィールドを持ち、CMU Pronouncing Dictionary ベースの IPA を保持
- `js/app.js`
  - 画面制御
  - 音声再生制御
  - localStorage 保存
- `css/style.css`
  - 画面スタイル
- `mp3/en`
  - 英語音声素材
  - `female_fast`, `female_slow`, `male_fast`, `male_slow`
- `mp3/jp`
  - 日本語音声素材
- `mp3/5en`
  - 英語 5 連結の単一 mp3

## 学習状態の保存

localStorage を使用します。

- `duoMobile.v1`
  - 最後に開いていた section
  - 表示中タブ
  - 例文位置
  - 音声位置
  - 単語出題状態
- `duoMobile.v1.stats`
  - 単語ごとの正誤履歴

## 音声生成スクリプト

## 発音記号データ

- 追加スクリプト: `scripts/add_ipa_from_cmudict.py`
- 辞書ソース: `cmudict.dict`（CMU Pronouncing Dictionary）
- 熟語や文型項目は、CMU 辞書に載る各語の発音を連結して `ipa` を生成

### 英語・日本語素材音声の生成

- スクリプト: `/home/ps/duo3.0/scripts/generate_section_audio.py`
- 英語素材出力先: `duo-mobile/mp3/en`
- 日本語素材出力先: `duo-mobile/mp3/jp`

英語男性音声も必要なため、再生成時は `--include-en-male` を付けます。

例:

```bash
/home/ps/.venv/bin/python /home/ps/duo3.0/scripts/generate_section_audio.py \
  /home/ps/duo3.0/section/section16.js \
  --base-dir /home/ps/duo-mobile \
  --languages en \
  --include-en-male \
  --overwrite
```

### 5en 単一 mp3 の生成

- スクリプト: `scripts/build_5en_audio.py`
- 出力先: `mp3/5en`
- 依存: `miniaudio`, `lameenc`

実行:

```bash
/home/ps/.venv/bin/python /home/ps/duo-mobile/scripts/build_5en_audio.py
```

## GitHub Pages 反映メモ

- 公開 URL: `https://6platinumstars-maker.github.io/Duo-Mobile/`
- 配信元: `master / (root)`

JS や音声の更新後はキャッシュ対策としてバージョン番号を上げます。

- `index.html`
  - `css/style.css?v=...`
  - `js/app.js?v=...`
- `js/app.js`
  - `AUDIO_ASSET_VERSION`

CSS だけの調整でも `style.css?v=...` を更新して、古い表示キャッシュを避けます。

反映確認時は通常再読込ではなく、次のどちらかを推奨します。

- シークレットウィンドウで確認
- ブラウザのハードリロード

## セクション追加・修正時の確認メモ

- `data/sectionXX.js` は通常の `<script>` 読み込みなので ES Modules の `export` を入れない
- Section 選択肢は `window.SECTIONS` に読み込めたものだけが出る
- 1 つでも section の読み込みで構文エラーがあると、その section が選択肢から消え、5連続の再生対象も崩れる
- `section29.js` のような個別更新時は `index.html` の対象 script の `?v=...` を上げる
- 音声差し替え時は `js/app.js` の `AUDIO_ASSET_VERSION` も更新する

## Git 確認コマンド

構文エラーや差分確認には次を使うと追いやすいです。

```bash
node --check /home/ps/duo-mobile/data/section29.js
node --check /home/ps/duo-mobile/js/app.js
git -C /home/ps/duo-mobile diff -- data/section29.js js/app.js index.html README.md
git -C /home/ps/duo-mobile status --short
```

## Git 管理方針

- `mp3/5en/**/*.wav` は Git 管理しない
- `mp3/5en/**/*.mp3` は GitHub Pages 配信用に管理する
- `__pycache__/`, `*.pyc` は管理しない

## 現在の主要ファイル

- `index.html`
- `js/app.js`
- `css/style.css`
- `scripts/build_5en_audio.py`
- `data/section01.js` 〜 `data/section45.js`
