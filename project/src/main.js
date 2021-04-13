import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import Vant from "vant";
import Vuex from "vuex";




import productList from "./utils/productList";

import "vant/lib/index.css";
import "../public/css/common.css";

// import {getToken} from './utils/auth'

Vue.use(Vant);
Vue.use(Vuex);
Vue.prototype.$http = axios; //把axios挂载到原型上面

Vue.prototype_url = productList; //把url挂载到原型上面
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  Vuex,
}).$mount("#app");

// 路由全局守卫

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.getItem('token') || "";
//   if(isLogin){
//     // to.path表示将要跳转到的路由
//     // form表示从哪个路由跳转过来
//     if(to.path == "/login"){
//       // 如果已经登录就直接跳转到首页
//       next('/')
//     } else{
//       next()//如果已经登录，并且没有跳转到登录页面
//     }
//   } else{
//     if(to.path == '/login'){
//       // 我没有登录，我进入登录页面，直接放行
//       next()
//     } else{
//       next('/login')//我没有登录想去其他页面，直接跳转到登录页面
//     }
//   }
// })
