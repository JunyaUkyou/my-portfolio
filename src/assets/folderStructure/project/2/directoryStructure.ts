export const directoryStructure = `.
├── README.md
├── backend                       # バックエンド
│   ├── .env
│   ├── .gitignore
│   ├── .venv
│   ├── Dockerfile
│   ├── api
│   │   ├── __init__.py
│   │   ├── events
│   │   │   └── startup.py        # startupイベント処理
│   │   ├── main.py               # ルーティング定義
│   │   ├── routers
│   │   │   └── ssd.py            # SSD系のAPI処理
│   │   └── validate.py           # バリデーションチェック処理
│   ├── core
│   │   ├── __init__.py
│   │   └── config.py
│   ├── fonts
│   │   └── NotoSansCJKjp-Bold.otf
│   ├── poetry.lock
│   ├── pyproject.toml
│   ├── services
│   │   └── ssd                   # SSD推論処理
│   │       ├── SSD_weights.pth   # 学習済みモデルの重みファイル
│   │       ├── __init__.py
│   │       ├── constants.py      # 規定値
│   │       ├── net.py            # ネットワークモデル
│   │       └── ssd_predictor.py  # 推論処理
│   └── tests
│       ├── __init__.py
│       └── test_main.py
├── docker-compose.yml
└── frontend                      # フロントエンド
    ├── Dockerfile
    └── app
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── public
        │   ├── images
        │   │   ├── 1421_color.png
        │   │   ├── 4304_color.png
        │   │   ├── 4307_color.png
        │   │   ├── loading.gif
        │   │   ├── no-image.png
        │   │   └── upload.png
        │   └── vite.svg
        ├── src                      # 画面描画処理（フォルダ分けしたい、、）
        │   ├── App.css
        │   ├── App.tsx
        │   ├── ErrorMessage.tsx
        │   ├── FreeUploadImage.tsx
        │   ├── HowToUseContent.tsx
        │   ├── PredictionDescription.tsx
        │   ├── PredictionResult.tsx
        │   ├── PredictionSample.tsx
        │   ├── PredictionTargetEmpty.tsx
        │   ├── PredictionTargetPreview.tsx
        │   ├── TopContent.tsx
        │   ├── UploadImage.tsx
        │   ├── assets
        │   │   ├── 2EB011BF-CAA1-4470-9376-2E42A8B87CDE_1_105_c.jpeg
        │   │   ├── 4A0389F9-050D-4FF2-9230-1B434ACB44DE_4_5005_c.jpeg
        │   │   ├── bad1.jpg
        │   │   ├── bad2.jpeg
        │   │   └── react.svg
        │   ├── hooks
        │   │   └── PredictImage.ts
        │   ├── index.css
        │   ├── main.tsx
        │   └── vite-env.d.ts
        ├── tsconfig.app.json
        ├── tsconfig.json
        ├── tsconfig.node.json
        └── vite.config.ts
`;
