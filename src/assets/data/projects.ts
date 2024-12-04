import thumbnail1 from "@/assets/images/projects/1/thumbnail.png";

export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  overview: {
    descriptionList: projectDescription[];
    image: string;
    folderStructure: string;
  };
  githubUrl: string;
}

export type projectDescription = {
  title: string;
  details: string;
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
  },
];

// "リアルタイム映像から姿勢推定AIのMediaPipe Pose Landmarkerを使用し、映像中のポーズの座標値(x,y,z)を検出します",
// "検出した座標値にラベル（技名）を付与し、TensorFlow.js/knn-classifierで学習、ポーズに応じた技名を取得できるようにします",
// "検出したポーズに応じた技のエフェクトをThree.jsで描画します",
