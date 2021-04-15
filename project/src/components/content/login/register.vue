<template>
  <div class="register">
    <RegHeader></RegHeader>
    <van-form validate-first @failed="onFailed" class="reg-form">
      <p>
        <img :src="avatar" alt="" />
        <!-- <van-uploader :after-read="afterRead" preview-size="100px" /> -->
      </p>
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        label="用户名"
        v-model="value1"
        name="userName"
        placeholder="用户名"
        :rules="[{ userName, message: '请输入正确内容' }]"
      />
      <van-field
        label="密码"
        type="password"
        v-model="value2"
        name="pattern"
        placeholder="密码"
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />

      <!-- 通过 validator 进行函数校验 -->
      <!-- <img :src="imgurl" alt="" class="img"> -->
      <!-- 通过 validator 进行异步函数校验 -->
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          @click="submit"
          class="regBtn"
          >注册</van-button
        >
        <div class="reg">
          <router-link :to="{ name: 'Login' }">已有账号，我要登录</router-link>
        </div>
      </div>
    </van-form>
  </div>
</template>

<script>
// import axios from 'axios'
import { Toast } from "vant";
import { Notify } from "vant";
import RegHeader from "../header/reg";
export default {
  components: {
    RegHeader,
  },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      pattern: /\d{6}/,
      imgurl: "",
      avatar: "",
      fileList: [],
      userName: /\w{3,16}/,
    };
  },
  methods: {
    alidator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise

    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    // readFile(file) {
    //   console.log(file);
    //   console.log(this.fileList);
    //   // let formdata = new FormData()
    //   // formdata.append('file',file)
    //   this.imgurl = file.content;
    //   // this.$http.post('http://localhost:3009/api/v1/common/file_upload',{formdata}).then(res=>{
    //   //     console.log(res)
    //   // })
    // },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.avatar = file.content;

      console.log(file.content);
    },
    submit() {
      this.$http({
        url: "http://localhost:3009/api/v1/auth/reg",
        method: "post",
        data: {
          userName: this.value1,
          password: this.value2,
          nickName: this.value3,
          avatar: this.avatar,
        },
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          if (res.data.code == "success") {
            Toast.success({
              message: "即将进入登陆界面",
            });
            setTimeout(() => {
              this.$router.push({
                name: "Login",
              });
            }, 1000);
          } else {
            Notify(res.data.message);
          }
        }
      });
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style scoped>
.reg-form {
  width: 100%;
  margin-top: 40%;
}
.regBtn {
  margin-top: 20px;
}
p {
  display: flex;
  justify-content: center;
  align-items: center;
}
.reg{
  margin: 2rem 1rem;
}
img {
  width: 100px;
}
</style>
