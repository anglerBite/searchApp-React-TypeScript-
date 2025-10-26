# React + TypeScript + Vite

・検索アプリ（React × TypeScript）README

このリポジトリは、入力テキストで配列を絞り込む最小構成の検索アプリです。
初心者でも読みやすいように、責務の分離・純粋配列・純粋関数という観点で実装を説明します。

⸻

・できること

	•	テキスト入力に応じて、['Dog', 'Cat', 'Rabbit', 'Camel'] を部分一致でフィルタ表示
	•	大文字/小文字を無視して検索（toLowerCase()）
	•	結果が空のときは「No items found」を表示

⸻

・動かし方

	1.	依存インストール
npm i
# or
pnpm i
# or
yarn

	2.	開発サーバー起動
npm run dev

	3.	ブラウザで開く
表示URL：http://localhost:5173

⸻

・フォルダ構成

src/
  App.tsx                # 画面全体の構成と状態管理（text）
  component/
    SearchBar.tsx        # 入力欄（UI と onChange のみ）
    ItemList.tsx         # 絞り込み結果の表示（配列→li）

⸻

・責務の分離（ロジックの責務）

	•	App.tsx
	•	アプリの状態管理（text）
	•	検索ロジックの発火点（useMemo で filtered を計算）
	•	子へ必要な props を渡す（text / setText / items）

	•	SearchBar.tsx
	•	表示と入力だけを担当
	•	onChange で親から渡された setText を呼ぶ（副作用は持たない）
  
	•	ItemList.tsx
	•	受け取った配列を表示するだけ
	•	空配列なら「No items found」を出す（UI責務）# searchApp-React-TypeScript-
