import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Layout.vue";
import Login from "@/views/Login.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      //重定向
      redirect: '/article/manage',
      //子路由
      children: [
        {
          path: "/article/category",
          component: () => import("@/views/article/ArticleCategory.vue"),
        },
        {
          path: "/article/manage",
          component: () => import("@/views/article/ArticleManage.vue"),
        },
        {
          path: "/user/info",
          component: () => import("@/views/user/UserInfo.vue"),
        },
        {
          path: "/user/avatar",
          component: () => import("@/views/user/UserAvatar.vue"),
        },
        {
          path: "/user/password",
          component: () => import("@/views/user/UserResetPassword.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});

export default router;
