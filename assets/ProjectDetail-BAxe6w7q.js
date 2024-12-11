import{u as w,i as B,d as y,r as j,c as a,h,a as e,t as l,n as L,o as i,g as E,w as T,j as o,e as U,k as A,b as u,F as f,f as v}from"./index-Wmvcv8s5.js";import{p as C}from"./projects-CdZN2g1U.js";function M(){const p=w(),t=B(()=>Number(p.params.id));return B(()=>C.find(d=>d.id===t.value))}const N=y({__name:"CodeBlock",props:{code:{},styleArray:{default:()=>[]}},setup(p){const t=p,c=j(t.styleArray);return(d,s)=>(i(),a("pre",{class:"code-block",style:L(c.value)},[s[0]||(s[0]=h("        ")),e("code",null,l(t.code)+" ",1),s[1]||(s[1]=h(`
    `))],4))}}),R=["https://github.com/JunyaUkyou/dragonball-effects"],D=y({__name:"Link",props:{url:{},name:{}},setup(p){const t=p,c=j(t.url),d=j(t.name),s=()=>{const r=c.value.trim();R.includes(r)?window.location.href=r:console.warn("GitHub URL is not available for this project.")};return(r,g)=>{const m=U("el-link");return i(),E(m,{icon:o(A),onClick:s,rel:"noopener noreferrer"},{default:T(()=>[h(l(d.value),1)]),_:1},8,["icon"])}}}),H=`.
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
└── vite.config.js`,P={class:"project-detail"},V=["src"],F={class:"project-description"},O={class:"project-info"},G={class:"project-overview"},I={class:"directory-structure"},J={class:"features"},K=["src","alt"],W=y({__name:"ProjectDetail",setup(p){var c;const t=M();return t&&console.log((c=t.value)==null?void 0:c.githubUrl),(d,s)=>{var g,m,k,S,x,b;const r=U("el-divider");return i(),a("div",P,[e("header",null,[e("h1",null,l((g=o(t))==null?void 0:g.title),1)]),e("img",{src:(m=o(t))==null?void 0:m.thumbnail,alt:"Project image",class:"project-image"},null,8,V),e("p",F,l((k=o(t))==null?void 0:k.description),1),u(D,{url:o(t).githubUrl,name:"GITHUBレポジトリはこちら"},null,8,["url"]),u(r),e("div",O,[s[0]||(s[0]=e("h2",null,"Technologies Used:",-1)),e("ul",null,[(i(!0),a(f,null,v((S=o(t))==null?void 0:S.technologies,n=>(i(),a("li",{key:n},l(n),1))),128))])]),u(r),e("div",G,[s[1]||(s[1]=e("h2",null,"Project Overview",-1)),e("ol",null,[(i(!0),a(f,null,v((x=o(t))==null?void 0:x.overview.descriptionList,(n,_)=>(i(),a("li",{key:_},[e("strong",null,l(n.title),1),e("p",null,l(n.details),1)]))),128))])]),u(r),e("div",I,[s[2]||(s[2]=e("h2",null,"Directory Structure",-1)),u(N,{code:o(H),style:L(["max-height:600px"])},null,8,["code"])]),u(r),e("div",J,[s[3]||(s[3]=e("h2",null,"Features",-1)),(i(!0),a(f,null,v((b=o(t))==null?void 0:b.features,(n,_)=>(i(),a("div",{class:"feature",key:_},[e("h3",null,l(n.title),1),e("p",null,l(n.description),1),e("img",{src:n.image,alt:n.title,class:"feature-image"},null,8,K)]))),128))]),u(r)])}}});export{W as default};
