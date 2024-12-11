import{u as B,i as S,d as E,c as i,a as t,t as o,j as l,b as a,F as d,f as m,h as g,w as T,e as w,o as r}from"./index-CfJztOUK.js";import{p as L}from"./projects-CdZN2g1U.js";function M(){const v=B(),e=S(()=>Number(v.params.id));return S(()=>L.find(u=>u.id===e.value))}const N={class:"project-detail"},C=["src"],H={class:"project-description"},R={class:"project-info"},U={class:"project-overview"},V={class:"features"},D=["src","alt"],F=E({__name:"ProjectDetail",setup(v){const e=M(),j=()=>{var u;(u=e==null?void 0:e.value)!=null&&u.githubUrl?window.open(e.value.githubUrl,"_blank"):console.warn("GitHub URL is not available for this project.")};return(u,n)=>{var _,h,f,k,y,b;const c=w("el-divider"),x=w("el-button");return r(),i("div",N,[t("header",null,[t("h1",null,o((_=l(e))==null?void 0:_.title),1)]),t("img",{src:(h=l(e))==null?void 0:h.thumbnail,alt:"Project image",class:"project-image"},null,8,C),t("p",H,o((f=l(e))==null?void 0:f.description),1),a(c),t("div",R,[n[0]||(n[0]=t("h2",null,"Technologies Used:",-1)),t("ul",null,[(r(!0),i(d,null,m((k=l(e))==null?void 0:k.technologies,s=>(r(),i("li",{key:s},o(s),1))),128))])]),a(c),t("div",U,[n[1]||(n[1]=t("h2",null,"Project Overview",-1)),t("ol",null,[(r(!0),i(d,null,m((y=l(e))==null?void 0:y.overview.descriptionList,(s,p)=>(r(),i("li",{key:p},[t("strong",null,o(s.title),1),t("p",null,o(s.details),1)]))),128))])]),a(c),n[4]||(n[4]=t("div",{class:"directory-structure"},[t("h2",null,"Directory Structure"),t("pre",{class:"code-block"},[g(`
        `),t("code",null,`
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
`),g(`

      `)])],-1)),a(c),t("div",V,[n[2]||(n[2]=t("h2",null,"Features",-1)),(r(!0),i(d,null,m((b=l(e))==null?void 0:b.features,(s,p)=>(r(),i("div",{class:"feature",key:p},[t("h3",null,o(s.title),1),t("p",null,o(s.description),1),t("img",{src:s.image,alt:s.title,class:"feature-image"},null,8,D)]))),128))]),a(c),a(x,{type:"primary",onClick:j},{default:T(()=>n[3]||(n[3]=[g("View on GitHub")])),_:1})])}}});export{F as default};
