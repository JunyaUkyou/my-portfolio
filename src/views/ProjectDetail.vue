<template>
  <div class="project-detail">
    <header>
      <h1>{{ project?.title }}</h1>
    </header>
    <!-- メインプロジェクト画像 -->
    <img :src="project?.thumbnail" alt="Project image" class="project-image" />
    <p class="project-description">{{ project?.description }}</p>
    <el-divider />

    <!-- 技術情報 -->
    <div class="project-info">
      <h2>Technologies Used:</h2>
      <ul>
        <li v-for="tech in project?.technologies" :key="tech">{{ tech }}</li>
      </ul>
    </div>
    <el-divider />
    <!-- プロジェクト概要 -->
    <div class="project-overview">
      <h2>Project Overview</h2>
      <ol>
        <li
          v-for="(description, index) in project?.overview.descriptionList"
          :key="index"
        >
          <strong>{{ description.title }}</strong>
          <p>{{ description.details }}</p>
        </li>
      </ol>
    </div>
    <el-divider />

    <div class="directory-structure">
      <h2>Directory Structure</h2>
      <pre class="code-block">

        <code>
          .
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
└── vite.config.js
</code>

      </pre>
    </div>
    <el-divider />

    <!-- 各機能紹介 -->
    <div class="features">
      <h2>Features</h2>
      <div
        class="feature"
        v-for="(feature, index) in project?.features"
        :key="index"
      >
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
        <img :src="feature.image" :alt="feature.title" class="feature-image" />
      </div>
    </div>

    <el-divider />
    <!-- GitHub ボタン -->
    <el-button type="primary" @click="goToGithub">View on GitHub</el-button>
  </div>
</template>

<script setup lang="ts">
import { useProject } from "@/composables/useProject";

const project = useProject();

const goToGithub = () => {
  if (project?.value?.githubUrl) {
    window.open(project.value.githubUrl, "_blank");
  } else {
    console.warn("GitHub URL is not available for this project.");
  }
};
</script>
