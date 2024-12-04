import logo from "@/assets/thumbnail.png";

export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
}

export const projects: ProjectInterface[] = [
  {
    id: 1,
    title: "姿勢推定でドラゴンボールの技をだす",
    description:
      "姿勢推定AIの技術を仕様して、ポーズに応じた技のエフェクトを表示します",
    image: logo,
    technologies: [
      "Typescript",
      "MediaPipe Pose Landmarker",
      "TensorFlow.js/knn-classifier",
      "Three.js",
    ],
    githubUrl: "https://github.com/JunyaUkyou/dragonball-effects",
  },
];
