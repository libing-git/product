<!--  -->
<template>
  <div class="jianguo">
    <van-nav-bar
      title="坚果周边"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    >
    </van-nav-bar>

    <van-empty
      class="custom-image"
      image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
      description="抱歉！！！没有商品。"
    />
    <van-button type="primary" @click="tolist()" block> 返回列表</van-button>
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
      this.$router.push({ path: "/shouye" });
    },
    tolist() {
      this.$router.push({ path: "/message" });
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
  activated() {},
};
</script>
<style scoped>
.custom-image {
  margin-top: 180px;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>
