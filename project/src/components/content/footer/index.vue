<template>
  <div class="footer">
    <div class="footerNav">
      <ul>
        <van-tabbar v-model="active">
          <van-tabbar-item icon="home-o" to="/shouye" tag="li"
            >首页</van-tabbar-item
          >
          <van-tabbar-item icon="search" to="/message" tag="li"
            >列表</van-tabbar-item
          >
          <van-tabbar-item icon="friends-o" to="/cart" tag="li"
            >购物车</van-tabbar-item
          >
          <van-tabbar-item icon="setting-o" to="/mine" tag="li"
            >我的</van-tabbar-item
          >
        </van-tabbar>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
    };
  },
  methods: {},
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
.footerNav {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
}
.footerNav ul {
  display: flex;
  justify-content: flex-start;
  list-style: none;
}
.footerNav ul li {
  flex: 1;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.active {
  background: goldenrod;
  color: white;
}
</style>
