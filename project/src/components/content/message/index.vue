<template>
  <div class="message">
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :fixed="true"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card
        v-for="item in list"
        :key="item._id"
        :price="(item.price / 100).toFixed(2)"
        :title="item.name"
        :thumb="item.coverImg"
      >
        <template #footer>
          <van-button size="mini" icon="cart" type="danger" class="btn" @click="proDetail(item._id)"
            >购买</van-button
          >
        </template></van-card
      >
    </van-list>
  </div>
</template>
<script>
// import Toast from "vant";
export default {
  components: {},
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      per: 10,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      this.$http
        .get("http://localhost:3009/api/v1/products", {
          params: {
            page: this.page,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            if (res.data.products.length < 10) {
              this.finished = true;
            } else {
              this.loading = false;
              ++this.page;
            }
            this.list = this.list.concat(res.data.products);
          }
        });
    },
    proDetail(id) {
      this.$router.push({
        path: "/detail",
        query: { id },
      });
    },
    onClickLeft() {
      // Toast("返回");
    },
    onClickRight() {
      // Toast("按钮");
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
.btn {
  float: right;
  margin-right: 1rem;
  border: none;
  margin-top: -1.5rem;
  padding: 0.6rem;
  color: white;
}
.van-list {
  padding-top: 50px;
  padding-bottom: 40px;
}
</style>
