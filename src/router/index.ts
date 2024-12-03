import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Projects from "../views/Projects.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/Projects.vue"),
    },
    {
      path: "/projects/:id",
      name: "projectDetail",
      component: () => import("../views/ProjectDetail.vue"), // 詳細ページは遅延ロード
    },
  ],
});

export default router;
