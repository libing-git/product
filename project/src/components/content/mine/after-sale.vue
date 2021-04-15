<template>
  <div>
    <van-nav-bar
      title="售后"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <h1>合作店</h1>
    <van-cell-group>
      <van-cell title="二七区店" />
      <p>地址:二七区航海路10086号</p>
      <p>时间:周一至周五10:00~22:00</p>
      <p>电话:13000000000</p>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="中关村店" />
      <p>地址:</p>
      <p>时间:周一至周五10:00~22:00</p>
      <p>电话:12000000000</p>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="三里屯店" />
      <p>地址:朝阳区工体北路</p>
      <p>时间:周一至周五10:00~22:00</p>
      <p>电话:12000000000</p>
    </van-cell-group>
    <div>
      <ul class="fuwu">
        <li @click="dd">常见问题 <van-icon name="arrow-down" /></li>
        <li @click="dd">服务支持 <van-icon name="arrow-down" /></li>
        <li @click="dd">以旧换新 <van-icon name="arrow-down" /></li>
        <li @click="dd">活动说明 <van-icon name="arrow-down" /></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    dd() {
      this.$router.push("/server");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style soped>
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color:#eee;
}
.van-cell-group {
  margin-bottom: 0.5rem;
}
.van-cell-group p {
  text-indent: 10px;
  line-height: 1.4rem;
  color: darkgrey;
  /* border-bottom: solid 1px #eee; */
}
h1 {
  margin: 0.5rem;
  font-size: 1.2rem;
}
.fuwu{
  width: 100%;
  /* background-color: red; */
}
.fuwu li{
  height: 30px;
  line-height: 30px;
  font-size: 1rem;
  border-bottom:solid 1px #eee;
  text-indent: 10px;
}
.van-icon{
  float: right;
  line-height: 30px;
  margin-right: 0.5rem;
}
</style>
