import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../components/content/index.vue";
import Shouye from "../components/content/shouye/index.vue";
import Cart from "../components/content/cart/index.vue";
import Mine from "../components/content/mine/index.vue";
import Message from "../components/content/message/index.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    { path: "/", redirect: "/index" },
    // {path:'/message',component:message},
    {
      path: "/index",
      redirect: "/shouye",
      component: Index,
      children: [
        { path: "/message", component: Message, meta: { showTabbar: true } },
        { path: "/shouye", component: Shouye, meta: { showTabbar: true } },
        {
          path: "/mine",
          component: Mine,
          meta: { showTabbar: true },

          // 路由独享守卫
          beforeEnter(to, from, next) {
            const isLogin = localStorage.getItem("token");
            if (isLogin) {
              next();
            } else {
              next("/login");
            }
          },
        },
        {
          path: "/login",
          component: () => import("../components/content/login/login.vue"),
          meta: { showTabbar: false },
        },
        {
          path: "/register",
          component: () => import("../components/content/login/register.vue"),
        },
        {
          path: "/detail",
          component: () => import("../components/content/detail/index.vue"),
        },
        { path: "/cart", component: Cart, meta: { showTabbar: true } },
      ],
    },
  ],
  linkActiveClass: "active",
});
export default router;
