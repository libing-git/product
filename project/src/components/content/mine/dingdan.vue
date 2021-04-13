<template>
  <div class="dingdan">
    <van-nav-bar
    class="dd"
      title="我的订单"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-notice-bar
      scrollable
      left-icon="volume-o"
      text="此页面部分功能未开发，敬请期待，程序员已经删库跑路。"
    />

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
};
</script>
<style scoped>
.dd{
  border-bottom: solid 1px #ccc;

}
.dingdan h2 {
  text-align: center;
  font-size: 1.5rem;
  /* background-color: aqua; */
  line-height: 3rem;
}
</style>
