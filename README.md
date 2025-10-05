# ICTポータル（個人用／PWAインストール対応）

このフォルダをそのまま GitHub Pages に配置すると、Edge/Chrome の「インストール」ボタンが表示される構成です。

## ポイント
- `manifest.webmanifest`（PNG 192/512 を含む）
- ルート配下の `sw.js`（fetch ハンドラあり）
- HTTPS（GitHub PagesはOK）

## 公開手順（GitHub Pages）
1. このフォルダを新規リポジトリにコミット（`index.html` / `manifest.webmanifest` / `sw.js` / `icons/` / `packs/`）。
2. GitHub → Settings → Pages → `Deploy from a branch` → `main / root` を公開。
3. アクセス後、Edge/Chrome 右上の「インストール」または メニュー `︙ → アプリ → このサイトをインストール`。

## iOS / macOS Safari
- iOS/iPadOS: 共有メニュー → **ホーム画面に追加**
- macOS Safari 17+: **ファイル → Dockに追加**

## 初期リンクの配布
- 初回アクセスで `packs/bootstrap.json` を取り込み（既に取り込み済みの端末はローカル優先）。
- 更新を配る時は、先生側で「読み込み」から新JSONを取り込むか、QR共有の `#pack=...` を使ってください。
