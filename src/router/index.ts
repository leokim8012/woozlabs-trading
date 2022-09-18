import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "",
    redirect: "/page",
  },
  {
    path: "/page",
    component: () => import("@/views/Page/Index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Page/HomeView.vue"),
      },
    ],
  },
  {
    path: "/trading",
    component: () => import("@/views/Page/Trading/Index.vue"),
    children: [
      {
        path: "futures",
        name: "Futures",
        component: () => import("@/views/Page/Trading/FuturesView.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
