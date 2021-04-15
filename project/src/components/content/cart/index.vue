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
        <van-swipe-cell>
          <van-card
            :price="(item.product.price / 100).toFixed(2)"
            :title="item.product.name"
            class="goods-card"
            :thumb="item.product.coverImg"
          />
          <van-stepper
            v-model="item.quantity"
            @plus="addNum(item, item.product._id)"
            @minus="subNum(item, item.product._id)"
          />
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="delatePro(data._id,)"
            />
          </template>
        </van-swipe-cell>
        <!-- <p>{{ item.product.name }}</p>
        <p>{{ item.product.price /100}}</p>
        <p>{{ item.quantity }}</p> -->
      </div>
    </div>
    <div class="zwy"></div>
    <van-submit-bar :price="sumPrice" button-text="立即结算" @submit="onSubmit">
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
// import { Notify } from "vant";
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
    onClickLeft() {
       this.$router.push('/message')
    },
    async initCartlist() {
      const result = await reqCartlist();
      // console.log(result);
      this.products = result.data;
      console.log( this.products);
    },
    onSubmit() {
      // Notify({ type: "warning", message: "请输入地址" });
      // this.$router.replace("/dingdan");
      const list = this.products.filter((item)=>item.checked)
      console.log(list);
      this.$router.push({
          path:'/dingdan',
          query:{
              list,
          }
      })
    },
    // 增加
    async addNum(item, id) {
      item.quantity++;
      const result = await reqCartlist({ products: id });
      console.log(result);
    },
    //减少
    async subNum(item, id) {
      item.quantity--;
      const result = await reqCartlist({ products: id, quantity: -1 });
      console.log(result);
    },
    // 删除
    // 根据id删除购物车商品
    // delatePro(id) {
    //   Dialog.confirm({
    //     title: "删除",
    //     message: "你确定要删除吗？",
    //   })
    //     .then(async () => {
    //       // on confirm
    //       await delpro(id);
    //       this.list.forEach((v, i) => {
    //         if (v._id == id) {
    //           this.list.splice(i, 1);
    //         }
    //       });
    //     })
    //     .catch(() => {
    //       // on cancel
    //     });
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
<style scoped>
.goods-card {
  margin: 0;
}
.delete-button {
  height: 100%;
}
.zwy {
  width: 100%;
  height: 4rem;
}
.van-stepper {
  float: right;
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
}
.van-card__price-currency,
.van-card__price-integer,
.van-card__price-decimal {
  color: red;
}
</style>
