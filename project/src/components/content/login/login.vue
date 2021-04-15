<template>
  <div class="login">
    <Header></Header>
    <div class="login-form">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            class="logBtn"
            >登录</van-button
          >
          <div class="reg">
            <router-link :to="{ name: 'Reg' }"
              >没有账号，我要注册</router-link
            >
          </div>

          <!-- <van-button
            round
            block
            type="info"
            native-type="button"
            class="regBtn"
            @click="toReg"
            >注册</van-button
          > -->
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
// import store from '../store/user/index'
import { setToken } from "../../../utils/auth";
import store from "../store";
import Header from "../header/header";
// import { setToken } from "../../../utils/auth";
export default {
  components: {
    Header,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    // toReg() {
    //   this.$router.push("/register");
    // },
    login() {
      localStorage.setItem("token", "xxxx");
      this.$router.push("/message");
    },
    onSubmit(values) {
      this.$http
        .post("http://localhost:3009/api/v1/auth/login", {
          userName: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            if (res.data.code == "success") {
              store.commit("setToken", res.data.token);
              setToken(res.data.token);
              Notify({ type: "success", message: "登录成功" });
              localStorage.setItem("userName", this.username);
              this.$router.push("/message");
            }
          }
          store.user.commit("setToken", res.token);
          localStorage.setItem("token", res.token);
        });
      console.log("submit", values);
    },
  },
  created() {},
  mounted() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style scoped>
html,body{
  margin: 0;
  padding: 0;
}
.login-form {
  width: 100%;
  margin-top: 40%;
}
.logBtn,
.regBtn {
  margin-top: 20px;
}
.reg {
  margin: 2rem 1rem;
}
</style>
