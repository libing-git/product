<template>
  <div class="cart">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div v-for="item in products" :key="item._id">
      <van-checkbox v-model="item.checked">选中</van-checkbox>
      <div>
        <p>{{ item.product.name }}</p>
        <p>{{ item.product.price /100}}</p>
        <p>{{ item.quantity }}</p>
      </div>
    </div>
    <van-submit-bar
      :price="sumPrice * 100"
      button-text="立即结算"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
    <!-- <van-goods-action
      :price="sumPrice * 100"
      button-text="立即结算"
      @submit="onSubmit"
    >
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action> -->
  </div>
</template>

<script>
import { reqCartlist } from "../api/cart";
import { Notify } from "vant";
// import { get } from "../../../utils/request";
// import { serverUrl } from "../../../utils/common";
// import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      products: [],
    };
  },
  computed: {
    checked: {
      // set设置选中状态
      set(flag) {
        return this.products.forEach((item) => (item.checked = flag));
      },
      get() {
        // 调用get方法
        return (
          this.products.length ==
          this.products.filter((item) => item.checked == true).length
        );
      },
    },
    sumPrice() {
      //计算属性一定必须要有返回值
      //filter 可以生成新数组 里边存放的是过滤后符合条件的元素
      return this.products
        .filter((item) => {
          //通过过滤，筛选出被选中的商品
          return item.checked;
        })
        .reduce(function(per, cur) {
          return per + cur.product.price * cur.quantity;
        }, 0);
    },
  },
  watch: {},

  methods: {
    //   initDetail(id){
    //         this.$http.get(`http://localhost:3009/api/v1/products/${id}`).then(res=>{
    //             console.log(res)
    //             if(res.status === 200){
    //                 this.product = res.data
    //             }
    //         })
    //     },

    // initCartlist(){
    //     this.$http.get(`${serverUrl}`)
    // }
    onClickLeft() {
      this.$router.go(-1)
    },
    async initCartlist() {
      const result = await reqCartlist();
      console.log(result);
      this.products = result.data;
    },
    onSubmit() {
      Notify({ type: "warning", message: "请输入地址" });
      // this.$router.replace("/address");
    },
    // onClickIcon() {
    //   Toast("点击图标");
    // },
    // onClickButton() {
    //   Toast("点击按钮");
    // },
  },
  created() {
    this.initCartlist(); //初始数据
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped></style>
