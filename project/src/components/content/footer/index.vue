<template>
  <div class="footer">
    <div class="footerNav">
      <ul>
        <router-link to="/message" tag="li">信息</router-link>
        <router-link to="/tong" tag="li">通讯录</router-link>
        <router-link to="/cart" tag="li">购物车</router-link>
        <router-link to="/mine" tag="li">我的</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.active {
  background: goldenrod;
  color: white;
}
</style>
