import{u as U,i as b,d as y,r as v,c as a,h,a as e,t as i,n as B,o as l,g as w,w as E,j as o,e as L,k as T,b as c,F as f,f as j}from"./index-Owp0nBNX.js";import{p as A}from"./projects-B2FhMB3s.js";function C(){const u=U(),t=b(()=>Number(u.params.id));return b(()=>A.find(s=>s.id===t.value))}const M=y({__name:"CodeBlock",props:{code:{},styleArray:{default:()=>[]}},setup(u){const t=u,d=v(t.styleArray);return(s,n)=>(l(),a("pre",{class:"code-block",style:B(d.value)},[n[0]||(n[0]=h("        ")),e("code",null,i(t.code)+" ",1),n[1]||(n[1]=h(`
    `))],4))}}),N=["https://github.com/JunyaUkyou/dragonball-effects"],R=y({__name:"Link",props:{url:{},name:{}},setup(u){const t=u,d=v(t.url),s=v(t.name),n=()=>{const p=d.value.trim();N.includes(p)?window.location.href=p:console.warn("GitHub URL is not available for this project.")};return(p,_)=>{const m=L("el-link");return l(),w(m,{icon:o(T),onClick:n,rel:"noopener noreferrer"},{default:E(()=>[h(i(s.value),1)]),_:1},8,["icon"])}}}),D=`.
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
└── vite.config.js`,H={class:"project-detail"},P=["src"],V={class:"project-description"},F={class:"project-info"},O={class:"project-overview"},G={class:"directory-structure"},I={class:"features"},J=["src","alt"],z=y({__name:"ProjectDetail",setup(u){const t=C();return(d,s)=>{var p,_,m,k,S,x;const n=L("el-divider");return l(),a("div",H,[e("header",null,[e("h1",null,i((p=o(t))==null?void 0:p.title),1)]),e("img",{src:(_=o(t))==null?void 0:_.thumbnail,alt:"Project image",class:"project-image"},null,8,P),e("p",V,i((m=o(t))==null?void 0:m.description),1),c(R,{url:o(t).githubUrl,name:"GITHUBレポジトリはこちら"},null,8,["url"]),c(n),e("div",F,[s[0]||(s[0]=e("h2",null,"Technologies Used:",-1)),e("ul",null,[(l(!0),a(f,null,j((k=o(t))==null?void 0:k.technologies,r=>(l(),a("li",{key:r},i(r),1))),128))])]),c(n),e("div",O,[s[1]||(s[1]=e("h2",null,"Project Overview",-1)),e("ol",null,[(l(!0),a(f,null,j((S=o(t))==null?void 0:S.overview.descriptionList,(r,g)=>(l(),a("li",{key:g},[e("strong",null,i(r.title),1),e("p",null,i(r.details),1)]))),128))])]),c(n),e("div",G,[s[2]||(s[2]=e("h2",null,"Directory Structure",-1)),c(M,{code:o(D),style:B(["max-height:600px"])},null,8,["code"])]),c(n),e("div",I,[s[3]||(s[3]=e("h2",null,"Features",-1)),(l(!0),a(f,null,j((x=o(t))==null?void 0:x.features,(r,g)=>(l(),a("div",{class:"feature",key:g},[e("h3",null,i(r.title),1),e("p",null,i(r.description),1),e("img",{src:r.image,alt:r.title,class:"feature-image"},null,8,J)]))),128))]),c(n)])}}});export{z as default};
