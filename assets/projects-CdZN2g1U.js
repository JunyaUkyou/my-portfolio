const e="/my-portfolio/assets/thumbnail-ChQ85Ium.png",t="/my-portfolio/assets/kamehameha-D8oRhQH6.gif",i=[{id:1,title:"姿勢推定でドラゴンボールの技をだす",description:"姿勢推定AIの技術を使用して、ポーズに応じた技のエフェクトを表示します",thumbnail:e,technologies:["Typescript","MediaPipe Pose Landmarker（Web）","TensorFlow.js/knn-classifier","Three.js"],overview:{descriptionList:[{title:"姿勢推定",details:"MediaPipe Pose Landmarkerを使用し、映像中の人物のポーズをリアルタイムで検出し、座標値（x, y, z）を取得します。"},{title:"ポーズ認識",details:"検出した座標値にラベル（技名）を付与し、TensorFlow.jsのknn-classifierを使って学習させます。これにより、特定のポーズを行った際に対応する技名を取得できるようにします。"},{title:"技の演出",details:"検出したポーズに応じて、Three.jsを用いてリアルタイムで技のエフェクトを描画します。"}],image:"",folderStructure:""},githubUrl:"https://github.com/JunyaUkyou/dragonball-effects",features:[{title:"かめはめ波",description:"",image:t}]}];export{i as p};