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
          <van-swipe-item
            ><img v-if="product.coverImg" :src="product.coverImg" alt=""
          /></van-swipe-item>
          <van-swipe-item
            ><img v-if="product.coverImg" :src="product.coverImg" alt=""
          /></van-swipe-item>
        </van-swipe>
      </div>
      <div class="productText" v-if="product">
        <div class="p-price">
          <p>￥{{ product.price / 100 }}</p>
          <span><van-icon name="star" /> 收藏</span>
        </div>
        <p class="name">{{ product.name }}</p>
        <!-- <span>{{ product.descriptions }}</span> -->
      </div>
      <van-rate v-model="value" />
    </div>
    <van-cell-group border class="fuwushuoming">
      <van-cell class="fuwu" value="服务说明" />
      <van-cell class="tuihuan" value="7天内无理由退货，15天质量问题换货" />
    </van-cell-group>
    <!-- 优惠券单元格 -->
    <van-coupon-cell />
    <!-- 优惠券列表 -->
    <van-popup>
      <van-coupon-list />
    </van-popup>

    <van-cell-group border class="fuwushuoming">
      <van-cell class="fuwu" value="优惠信息" />
      <van-cell class="tuihuan" value="开春价格直降" />
    </van-cell-group>
    <div class="xiangqing">
      <h2>商品详情</h2>
      <img :src="product.coverImg" v-if="imgurl" alt="" />
      <!-- <img :src="product.coverImg" v-if="product.coverImg" alt="" />  -->
      <img
        src="https://resource.smartisan.com/resource/30e4b9472f7b6c34b635ee483ca3cb47.png?x-oss-process=image/resize,w_828/indexcrop,y_1440,i_0/format,webp"
        alt=""
      />
      <img
        src="https://resource.smartisan.com/resource/1f906f1a85c9b4f96fce3a550cb5adaa.png?x-oss-process=image/resize,w_828/indexcrop,y_1440,i_6/format,webp"
        alt=""
      />
    </div>
    <div class="zw"></div>
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
      value: 4,
      imgurl: "",
      product: null,
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
            this.imgurl = res.data.coverImg;
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
.xiangqing {
  margin-top: 0.5rem;
  font-size: 1rem;
}
.zw {
  width: 100%;
  height: 80px;
}
.fuwushuoming {
  margin-top: 0.5rem;
  /* border: 1px solid #ccc; */
}
.fuwu {
  font-size: 1.2rem;
  border-bottom: 1px solid #ccc;
}
.fuwushuoming .tuihuan {
  font-size: 0.6rem;
}
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
.name {
  font-size: 1.2rem;
  text-indent: 1rem;
}
.van-nav-bar__content {
  position: fixed;
  top: 0;
}
.van-rate {
  margin: 1rem;
}
</style>
