<template>
  <div class="server">
    <van-nav-bar
      title="活动声明"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>
      <h1>服务支持</h1>
      <img
        src="https://img1.baidu.com/it/u=3186046743,2113523429&fm=26&fmt=auto&gp=0.jpg"
        alt=""
      />
    </div>

    <div>
      <h1>新人专区活动说明</h1>
      <p>
        新人专区是平台针对移动端新用户推出的优惠活动，在一定的活动时间范围内，新用户可以领取新人专属优惠券，也可以较低的价格购买新人价商品，优惠券不能和新人价商品叠加使用
      </p>
      <p>
        锤子商城将根据用户登录或使用的账号的关联信息判断是否为新用户，关联的信息包括但不限于：同一手机号、同一支付账号、同一设备号。锤子商城有权撤销非新人用户的活动资格并关闭对应交易订单
      </p>
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.redocn.com%2Fsheji%2F20151224%2Ftaobaohuodongshuomingyoufeijieshaoshengmingmobanshouhoutongyongyemian_5650138.jpg&refer=http%3A%2F%2Fimg.redocn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620995349&t=e1da2e081b5bdfca5539efc20b3fab8e"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  color: darkgrey;
  line-height: 2rem;
}
p {
  line-height: 1.5rem;
  text-indent: 1rem;
  color: darkgray;
}
</style>
