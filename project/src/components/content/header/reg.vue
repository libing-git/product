<template>
  <div class="header">
    <van-icon name="arrow-left" color="#fff" class="icon" @click="toLogin" />
    <h3>账号密码注册</h3>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    toLogin() {
      this.$router.push("../login");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
};
</script>
<style scoped>
.header {
  height: 58px;
  background: #000;
  text-align: center;
}
.header h3 {
  line-height: 58px;
  color: #fff;
  font-size: 20px;
}
.header .icon {
  float: left;
  line-height: 58px;
  font-size: 28px;
}
</style>