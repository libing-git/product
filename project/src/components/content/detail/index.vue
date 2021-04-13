<template>
  <div class="detail">
    <van-nav-bar
      title="商品详情"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="proDetail">
      <div class="proimg" v-if="product">
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
          <van-swipe-item><img :src="product.coverImg" alt="" /></van-swipe-item>
          <van-swipe-item><img :src="product.coverImg" alt="" /></van-swipe-item>
        </van-swipe>
        
      </div>
      <div class="productText" v-if="product">
        <div class="p-price">
          <p>￥{{ product.price / 100 }}</p>
          <span><van-icon name="star" /> 收藏</span>
        </div>
        <p>{{ product.name }}</p>
        <!-- <span>{{ product.descriptions }}</span> -->
      </div>
    </div>

    <!-- <van-button type="primary" block @click="addCart">加入购物车</van-button> -->
    <van-goods-action>
      <van-goods-action-icon
        icon="chat-o"
        text="首页"
        :to="{ name: 'IndexFo' }"
      />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :to="{ name: 'Cart' }"
      />
      <van-goods-action-button
        type="danger"
        text="加入购物车"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
import { reqAddcart } from "../api/vart";
export default {
  components: {},
  data() {
    return {
      product: null,
      value: "",
    };
  },
  methods: {
    initDetail(id) {
      this.$http
        .get(`http://localhost:3009/api/v1/products/${id}`)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.product = res.data;
          }
        });
    },
    onClickIcon() {
      this.$router.push("/cart");
    },
    async onClickButton() {
      const result = await reqAddcart({
        product: this.id,
        quantity: 1,
      });
      console.log(result);
      if (result.status === 200) {
        this.$router.push("/cart");
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  created() {
    this.id = this.$route.query.id;
    let id = this.$route.query.id;
    this.initDetail(id);
  },
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
.proDetail img {
  width: 100%;
}
.proDetail span {
  color: gray;
}
.productText p {
  margin-top: 1.2rem;
}
.p-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.p-price span {
  margin: 0.5rem 1rem;
  color: red;
}
.p-price p {
  font-size: 1.8rem;
  color: red;
  margin: 0.5rem 0.5rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
