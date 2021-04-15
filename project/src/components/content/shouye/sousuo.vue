<!--  -->
<template>
  <div class="sousuo">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <div class="box">
      <p>热门搜索</p>
      <span> 坚果 R2 </span><span> 蓝牙耳机 </span><span> TNT </span
      ><span> 移动电源 </span> <br />
      <span> 坚果快充 </span><span> 坚果 R2 保护套 </span>
    </div>

    <div class="liebiao" v-for="item in lists" :key="item._id">
      <div class="left">
        <img :src="item.coverImg" alt="" />
      </div>
      <div class="right">
        <p>{{ item.content }}</p>
        <p>{{ item.name }}</p>
        <span>{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: "",
      lists: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSearch(val) {
      this.$http
        .get("http://localhost:3009/api/v1/products", {
          params: {
            page: this.page,
            name: val,
          },
        })
        .then((res) => {
          console.log(res.data.products);
          this.lists = res.data.products;
        });
    },
    onCancel() {
      this.$router.push({ path: "/shouye" });
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
.box {
  margin-left: 20px;
}
.box p {
  font-size: 16px;
  color: #888;
  margin: 0 0 10px 0;
}
.box span {
  display: inline-block;
  height: 18px;
  border-radius: 9px;
  padding: 0 15px;
  margin: 5px 5px;
  background:#999;
}

/* liebiao  */
.liebiao {
  display: flex;
}
.left img {
  width: 100px;
  height: 100px;
  float: left;
  margin-top: 1rem;
}
.right p {
  margin: 10px 0 10px 10px;
  font-size: 18px;
}
.right span {
  font-size: 16px;
  color: red;
  margin: 0 0 0 20px;
}
</style>
