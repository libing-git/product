<template>
  <div class="mine">
    <h1 class="zong">个人中心</h1>
    <div class="geren1">
      <div class="gr1-s" @click="shezhiHandle">
        <img
          src="//static.smartisanos.cn/mobilenew/img/head.4b81d150.png"
          alt=""
        />
        <span class="_name">账号:{{ username }}</span>
        <em><van-icon name="arrow" color="#A8A8A8"/></em>
      </div>
      <div class="gr1-x" @click="Dingdan">
        <van-grid square :column-num="5">
          <van-grid-item icon="orders-o" text="全部订单" badge="99+" to="" />
          <van-grid-item icon="credit-pay" text="待付款" badge="5" to="" />
          <van-grid-item icon="cart" text="待收货" badge="99+" to="" />
          <van-grid-item icon="records" text="待评价" badge="23" to="" />
          <van-grid-item icon="manager" text="售后" dot to="" />
        </van-grid>
      </div>
    </div>
    <van-grid>
      <van-grid-item :to="{name:'DiZi'}" icon="photo-o" text="地址管理" />
      <van-grid-item icon="photo-o" text="我的优惠券" />
      <van-grid-item icon="photo-o" text="优先购买码" />
      <van-grid-item icon="photo-o" text="零售门店" />
      <van-grid-item icon="photo-o" text="以旧换新" />
      <van-grid-item icon="photo-o" text="常见问题" />
      <van-grid-item icon="photo-o" text="服务支持" />
      <van-grid-item icon="photo-o" text="活动说明" />
    </van-grid>

    <ul class="lb-box">
      <li>
        <em>修改密码</em> <i><van-icon name="arrow" color="#A8A8A8"/></i>
      </li>
      <li style="border:0">
        <em>退出登录</em> <i><van-icon name="arrow" color="#A8A8A8"/></i>
      </li>
    </ul>
  </div>
</template>

<script>
// import Dizi from "./dizi";

export default {
  components: {},
  data() {
    return {
      username: " ",
    };
  },
  created() {
    console.log(this.$route);
    this.username = localStorage.getItem("userName");
  },
  methods: {
    shezhiHandle() {
      this.$router.push("/user");
    },
    // Login() {
    //   this.$router.push("/login");
    // },
    Dizi() {
      this.$router.push("/dizi");
    },
    Dingdan() {
      this.$router.push("/dingdan");
    },
  },
  mounted() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style scoped>
.mine {
  padding: 4rem 0.8rem 2.8rem;
  background: #f5f5f5 url(//static.smartisanos.cn/mobilenew/img/bg.205d0820.png)
    repeat 50%;
  background-size: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 100vh;
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.8);
}
.zong {
  text-align: center;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  height: 50px;
  position: fixed;
  width: 100%;
  max-width: 480px;
  top: 0;
  left: 0;
  line-height: 50px;
  font-size: 19px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
  z-index: 3;
}
/* 登录注册 */
.geren1 {
  margin-bottom: 0.65rem;
  -webkit-box-shadow: 0 5px 13px rgb(0 0 0 / 5%);
  box-shadow: 0 5px 13px rgb(0 0 0 / 5%);
  border-radius: 0.4rem;
  background-color: #fff;
}
.geren1 .gr1-s {
  padding: 0.8rem 0.9rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  position: relative;
}
.geren1 .gr1-s img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.geren1 .gr1-s span {
  padding-left: 0.9rem;
  font-size: 18px;
}
.geren1 .gr1-s em {
  position: absolute;
  right: 25px;
  top: 37px;
  font-weight: 900;
}
.lb-box {
  margin-bottom: 0.65rem;
  box-shadow: 0 5px 13px rgb(0 0 0 / 5%);
  border-radius: 0.4rem;
  background: #fff;
  margin-top: 0.25rem;
}
.lb-box li {
  padding: 1.1rem;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
}
.lb-box li em {
  font-size: 18px;
}
</style>
