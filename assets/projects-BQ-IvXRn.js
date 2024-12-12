const o="/my-portfolio/assets/thumbnail-ChQ85Ium.png",t="/my-portfolio/assets/kamehameha-D8oRhQH6.gif",e="/my-portfolio/assets/teleportation-B4jK_TM6.gif",i="/my-portfolio/assets/supersaiyajin-CHUK4Z8L.gif",s="/my-portfolio/assets/bigbanattack-XYNIV0Kq.gif",a=`.
├── README.md
├── index.html                          # 姿勢推定でドラゴンボールの技をだす実行画面HTML
├── package-lock.json
├── package.json
├── public
│   ├── sounds
│   │   ├── teleportation.mp3
│   │   └── teleportation2.mp3
│   ├── texture                         # Three.jsで使用するエフェクト素材
│   │   ├── 3658520_s.jpg
│   │   ├── angel_ring.png
│   │   ├── empty_room.png
│   │   ├── kamehameha.jpg
│   │   ├── majinbuu.svg
│   │   ├── supersaiyajin_hair.png
│   │   └── supersaiyajin_oura.png
│   └── vite.svg
├── src
│   ├── core
│   │   ├── LiveCommentary.ts           # チャオズ コメント処理
│   │   ├── Main.ts                     # 映像エフェクト メイン処理
│   │   ├── Utilities.ts                # 共通処理
│   │   ├── VideoRenderer.ts            # リアルタイム映像描画処理
│   │   └── constants.ts                # 定数ファイル
│   ├── effects
│   │   ├── AngelRing.ts                # 天使の輪 エフェクト処理
│   │   ├── BaseEffect.ts
│   │   ├── BigBangAttack.ts            # ビッグバンアタック エフェクト処理
│   │   ├── Heaven.ts                   # 天国イベント処理
│   │   ├── Kamehameha.ts               # かめはめ波 エフェクト処理
│   │   ├── MajinBuu.ts                 # 魔人ブウ エフェクト処理
│   │   ├── Spark.ts
│   │   ├── SparkEmitter.ts
│   │   ├── SparkEmitter_in.ts
│   │   ├── Sphere.ts
│   │   ├── SuperSaiyajin.ts            # スーパーサイヤ人（髪の毛）エフェクト処理
│   │   ├── SuperSaiyajinEvent.ts       # スーパーサイヤ人エフェクト処理
│   │   ├── SuperSaiyajinOura.ts        # スーパーサイヤ人（オーラ）エフェクト処理
│   │   ├── Teleportation.ts            # 瞬間移動エフェクト処理
│   │   └── parts
│   ├── index.ts                        # index.htmlから起動するJS処理、ここで姿勢推定処理、分類処理、映像エフェクト処理を起動する
│   ├── models                          # 分類モデルと姿勢推定処理
│   │   ├── classifier.ts               # KNN分類器を使用したポーズの分類処理
│   │   ├── knn-classifier-model.text   # ポーズ学習画面で学習した重みをここに配置する
│   │   └── landmarker.ts               # Mediapipeを使用した姿勢推定処理
│   ├── style.scss
│   ├── train.ts                        # ポーズ学習のメイン処理、学習した重みをダウンロードする
│   ├── types.ts
│   ├── typescript.svg
│   └── vite-env.d.ts
├── train.html                          # ポーズ学習画面HTML
├── tsconfig.json
└── vite.config.js`,n="/my-portfolio/assets/thumbnail-CrtTrMoS.png",r=`.
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
`,p=[{id:1,title:"姿勢推定でドラゴンボールの技をだす",description:"姿勢推定AIの技術を使用して、ポーズに応じた技のエフェクトを表示します",thumbnail:o,technologies:["Typescript","MediaPipe Pose Landmarker（Web）","TensorFlow.js/knn-classifier","Three.js"],overview:{descriptionList:[{title:"リアルタイム映像処理",details:"Three.jsのプレーンオブジェクトにマテリアルとしてvideoTextureを適用し、リアルタイム映像を投影します。"},{title:"姿勢推定",details:"MediaPipe Pose Landmarkerを使用し、映像中の人物のポーズをリアルタイムで検出し、座標値（x, y, z）を取得します。"},{title:"ポーズ認識",details:"検出した座標値にラベル（技名）を付与し、TensorFlow.jsのknn-classifierを使って学習させます。これにより、特定のポーズを行った際に対応する技名を取得できるようにします。"},{title:"技の演出",details:"検出したポーズに応じて、Three.jsを用いてリアルタイムで技のエフェクトを描画します。"}],image:"",folderStructure:""},githubUrl:"https://github.com/JunyaUkyou/dragonball-effects",features:[{title:"スーパーサイヤ人",description:"スーパーサイヤ人の戦闘力を上げるポーズをするとスーパーサイヤ人エフェクトが発生します",image:i},{title:"瞬間移動",description:"指を額にあてるポーズをすると、リアルタイム映像が事前に撮影した人間がいない部屋に1.2秒置き換わります。その間に素早く移動することで擬似的に瞬間移動を行います",image:e},{title:"かめはめ波",description:"かめはめ波の構えをすると、かめはめ波が発生します。「波」でかめはめ波がカメラに向かって大きく遷移するので、そのタイミングでかめはめ波の構えから実行にポーズを変更します",image:t},{title:"ビッグバンアタック（魔人ブウ イベントつき）",description:"左から右へ向かって手のひらを向けます。現在はビッグバンアタックを打つと魔人ブウイベントが発生します",image:s}],directoryStructure:a},{id:2,title:"物体検出技術でコーヒー豆の欠点豆を検出する",description:"物体検出SSDを用いて、アップロードしたコーヒー生豆の画像が良質豆か欠点豆かを識別します",thumbnail:n,technologies:["FastAPI（Python）","TypeScript","React","SSD（torchvision.models.detection.ssd300_vgg16）"],overview:{descriptionList:[{title:"用意するコーヒー豆",details:"焙煎前の生豆の画像から良質豆か欠点豆かを識別します"},{title:"コーヒー豆の分類（ラベル）",details:"良質豆（表）、良質豆（裏）、欠点豆 形が不正（表）、欠点豆 形が不正（表）"},{title:"画像のリサイズ",details:"OpenCV(cv2)でiPhoneで撮影した画像のリサイズ(300,300)を実施"},{title:"データ拡張",details:"OpenCV(cv2)で画像の90度、180度、270度回転した画像を作成し、データ拡張を実施"},{title:"データセット数",details:"387枚の画像を用意、学習7:検証2:テスト1の割合でデータセットを分割"},{title:"Non-Maximum Suppression (NMS)",details:"重なり具合（IoU） が50%以上重なったバウンディングボックスを削除、スコア閾値が50%以下のバウンディングボックスを削除"}],image:"",folderStructure:""},githubUrl:"https://github.com/JunyaUkyou/detect-defective-green-coffee-beans",features:[{title:"スーパーサイヤ人",description:"スーパーサイヤ人の戦闘力を上げるポーズをするとスーパーサイヤ人エフェクトが発生します",image:i},{title:"瞬間移動",description:"指を額にあてるポーズをすると、リアルタイム映像が事前に撮影した人間がいない部屋に1.2秒置き換わります。その間に素早く移動することで擬似的に瞬間移動を行います",image:e},{title:"かめはめ波",description:"かめはめ波の構えをすると、かめはめ波が発生します。「波」でかめはめ波がカメラに向かって大きく遷移するので、そのタイミングでかめはめ波の構えから実行にポーズを変更します",image:t},{title:"ビッグバンアタック（魔人ブウ イベントつき）",description:"左から右へ向かって手のひらを向けます。現在はビッグバンアタックを打つと魔人ブウイベントが発生します",image:s}],directoryStructure:r}];export{p};
