import thumbnail1 from "@/assets/images/projects/1/thumbnail.png";
import kamehamehaImage from "@/assets/images/projects/1/kamehameha.gif";
import teleportationImage from "@/assets/images/projects/1/teleportation.gif";
import supersaiyajinImage from "@/assets/images/projects/1/supersaiyajin.gif";
import bigbanattackImage from "@/assets/images/projects/1/bigbanattack.gif";
import { directoryStructure as directoryStructure1 } from "@/assets/folderStructure/project/1/directoryStructure";

import thumbnail2 from "@/assets/images/projects/2/thumbnail.png";
import { directoryStructure as directoryStructure2 } from "@/assets/folderStructure/project/2/directoryStructure";

export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  overview: {
    descriptionList: ProjectDescriptionType[];
    image: string;
    folderStructure: string;
  };
  githubUrl: string;
  features: ProjectFeatureType[];
  directoryStructure: string;
}

export type ProjectDescriptionType = {
  title: string;
  details: string;
};

export type ProjectFeatureType = {
  title: string;
  description: string;
  image: string;
};

export const projects: ProjectInterface[] = [
  {
    id: 1,
    title: "姿勢推定でドラゴンボールの技をだす",
    description:
      "姿勢推定AIの技術を使用して、ポーズに応じた技のエフェクトを表示します",
    thumbnail: thumbnail1,
    technologies: [
      "Typescript",
      "MediaPipe Pose Landmarker（Web）",
      "TensorFlow.js/knn-classifier",
      "Three.js",
    ],
    overview: {
      descriptionList: [
        {
          title: "リアルタイム映像処理",
          details:
            "Three.jsのプレーンオブジェクトにマテリアルとしてvideoTextureを適用し、リアルタイム映像を投影します。",
        },
        {
          title: "姿勢推定",
          details:
            "MediaPipe Pose Landmarkerを使用し、映像中の人物のポーズをリアルタイムで検出し、座標値（x, y, z）を取得します。",
        },
        {
          title: "ポーズ認識",
          details:
            "検出した座標値にラベル（技名）を付与し、TensorFlow.jsのknn-classifierを使って学習させます。これにより、特定のポーズを行った際に対応する技名を取得できるようにします。",
        },
        {
          title: "技の演出",
          details:
            "検出したポーズに応じて、Three.jsを用いてリアルタイムで技のエフェクトを描画します。",
        },
      ],
      image: "",
      folderStructure: "",
    },
    githubUrl: "https://github.com/JunyaUkyou/dragonball-effects",
    features: [
      {
        title: "スーパーサイヤ人",
        description:
          "スーパーサイヤ人の戦闘力を上げるポーズをするとスーパーサイヤ人エフェクトが発生します",
        image: supersaiyajinImage,
      },
      {
        title: "瞬間移動",
        description:
          "指を額にあてるポーズをすると、リアルタイム映像が事前に撮影した人間がいない部屋に1.2秒置き換わります。その間に素早く移動することで擬似的に瞬間移動を行います",
        image: teleportationImage,
      },
      {
        title: "かめはめ波",
        description:
          "かめはめ波の構えをすると、かめはめ波が発生します。「波」でかめはめ波がカメラに向かって大きく遷移するので、そのタイミングでかめはめ波の構えから実行にポーズを変更します",
        image: kamehamehaImage,
      },
      {
        title: "ビッグバンアタック（魔人ブウ イベントつき）",
        description:
          "左から右へ向かって手のひらを向けます。現在はビッグバンアタックを打つと魔人ブウイベントが発生します",
        image: bigbanattackImage,
      },
    ],
    directoryStructure: directoryStructure1,
  },
  {
    id: 2,
    title: "物体検出技術でコーヒー豆の欠点豆を検出する",
    description:
      "物体検出SSDを用いて、アップロードしたコーヒー生豆の画像が良質豆か欠点豆かを識別します",
    thumbnail: thumbnail2,
    technologies: [
      "FastAPI（Python）",
      "TypeScript",
      "React",
      "SSD（torchvision.models.detection.ssd300_vgg16）",
    ],
    overview: {
      descriptionList: [
        {
          title: "用意するコーヒー豆",
          details: "焙煎前の生豆の画像から良質豆か欠点豆かを識別します",
        },
        {
          title: "コーヒー豆の分類（ラベル）",
          details:
            "良質豆（表）、良質豆（裏）、欠点豆 形が不正（表）、欠点豆 形が不正（表）",
        },
        {
          title: "画像のリサイズ",
          details: "OpenCV(cv2)でiPhoneで撮影した画像のリサイズ(300,300)を実施",
        },
        {
          title: "データ拡張",
          details:
            "OpenCV(cv2)で画像の90度、180度、270度回転した画像を作成し、データ拡張を実施",
        },
        {
          title: "データセット数",
          details:
            "387枚の画像を用意、学習7:検証2:テスト1の割合でデータセットを分割",
        },
        {
          title: "Non-Maximum Suppression (NMS)",
          details:
            "重なり具合（IoU） が50%以上重なったバウンディングボックスを削除、スコア閾値が50%以下のバウンディングボックスを削除",
        },
      ],
      image: "",
      folderStructure: "",
    },
    githubUrl:
      "https://github.com/JunyaUkyou/detect-defective-green-coffee-beans",
    features: [
      {
        title: "スーパーサイヤ人",
        description:
          "スーパーサイヤ人の戦闘力を上げるポーズをするとスーパーサイヤ人エフェクトが発生します",
        image: supersaiyajinImage,
      },
      {
        title: "瞬間移動",
        description:
          "指を額にあてるポーズをすると、リアルタイム映像が事前に撮影した人間がいない部屋に1.2秒置き換わります。その間に素早く移動することで擬似的に瞬間移動を行います",
        image: teleportationImage,
      },
      {
        title: "かめはめ波",
        description:
          "かめはめ波の構えをすると、かめはめ波が発生します。「波」でかめはめ波がカメラに向かって大きく遷移するので、そのタイミングでかめはめ波の構えから実行にポーズを変更します",
        image: kamehamehaImage,
      },
      {
        title: "ビッグバンアタック（魔人ブウ イベントつき）",
        description:
          "左から右へ向かって手のひらを向けます。現在はビッグバンアタックを打つと魔人ブウイベントが発生します",
        image: bigbanattackImage,
      },
    ],
    directoryStructure: directoryStructure2,
  },
];
