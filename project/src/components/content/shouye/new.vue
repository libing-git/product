<!--  -->
<template>
  <div class="shiuji">
    <van-nav-bar
      title="新品配件"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    >
    </van-nav-bar>

    <!-- 顶部导航 -->
    <div class="ding">
      <van-tabs>
        <van-tab v-for="(item, index) in lists" :title="item.name" :key="index">
          <!-- 内容 {{ index }} -->
          <div class="box">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <ul class="produtList">
                <li
                  v-for="item in list"
                  :key="item._id"
                  @click="proDetail(item._id)"
                >
                  <div class="pimg">
                    <img :src="item.coverImg" alt="" />
                  </div>
                  <div class="pname">
                    <p>{{ item.name }}</p>
                    <span> ￥：{{ item.price }}</span>
                  </div>
                </li>
              </ul>
            </van-list>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 列表 -->
    <!-- <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
            ul class="produtList">
                <li v-for="item in list" :key="item._id" @click="proDetail(item._id)">
                    <div class="pimg">
                        <img :src="item.coverImg" alt="">
                    </div>
                    <div class="pname">
                        <p>{{item.name}}</p>
                        <span> ￥：{{item.price}}</span>
                    </div>
                </li>
            </ul>
        </van-list> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      per: 10,
      lists: [
        { name: "新品手机" },
        { name: "SmartianTNT套装" },
        { name: "耳机" },
        { name: "足迹" },
        { name: "手机配件" },
        { name: "坚果TNTgo新品配件" },
        { name: "Smartisan周边" },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/shouye" });
    },

    // liebiao
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
          console.log(res.data.products);
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
.ding {
  margin-top: 50px;
}

/* 列表 */
.pimg img {
  width: 200px;
  height: 150px;
}
.produtList {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.produtList li {
  width: 200px;
  margin-left: 6px;
}
.pname p {
  font-weight: 700;
  margin: 5px 0;
  line-height: 18px;
  font-size: 16px;
}
.pname span {
  font-size: 18px;
  font-weight: 700;
  color: red;
}
.van-list {
  padding-bottom: 60px;
}
</style>
