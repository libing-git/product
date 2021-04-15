<template>
  <div class="dingdan">
    <van-nav-bar
      class="dd"
      title="我的订单"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="xian1"></div>
      <!-- 收货信息 -->
    <div class="shouhuoxinxi" @click="godress">
       <p>收货信息</p>
        <p><span>填写收货信息</span>  <span>&gt; </span></p> 
    </div>

    <div class="xian2"></div>
     <!-- 支付方式 -->
     <div class="zhifufangshi">
       <p>支付方式</p>
       <ul>
         <li>  <van-icon name="wechat"  /> 微信支付</li>
         <li> <van-icon name="alipay" /> 支付宝</li>
         <li>  <van-icon name="gold-coin" />  蚂蚁花呗分期</li>
       </ul>
       <!-- <van-contact-list
        v-model="chosenContactId"
        :list="list"
        default-tag-text="默认"
        /> -->
       <div class="xian3"></div>
       <!-- 重要提示 -->
       <div class="tishi">
         <span>重要提示：</span>
         <p>*我们将在您完成支付后的72小时内陆续发货</p>
       </div>
     </div>
     <div class="xian4"></div>
   
   <!-- 用户须知 -->
    <div class="yonghuxuzhi">
      <span>用户须知</span>
      <p>根据2017年1月6日国家工商行政管理总局令第90号公布的《网络购买商品七日无理由退货暂行办法》，手机激活后将不适用七日无理由退货规定。</p>
      <p><van-checkbox v-model="checked">我已阅读并同意上述内容</van-checkbox> </p>
    </div>
   
    <!-- 警告 -->
     <div class="jinggao">
       <p>请您阅读用户须知内容,如果澹认同室，请勾选我已阅读并同意上述内容</p>
     </div>

     <div class="shangpin">
       <p><span>商品信息</span>  <span>总计<span>2</span> 件商品</span></p>
        <div class="xian5"></div>
        <div class="xiangqing" v-for='item in lists'  :key="item.product._id">
          <div class="zuo">
            <img :src="item.product.coverImg" alt="">
          </div>
          <div class="you">
            <p>{{item.product.name}}</p>
            <p>￥:{{(item.product.price)/100}}  &nbsp;&nbsp; 数量：{{item.quantity}}</p>
          </div>
        </div>
     </div>
       
    <div class="xian6"></div>
      
       <div class="money">
         <p>商品金额</p>
         <p>  <span>商品总计</span>  <span :price="sum">￥：{{(sum)/100}}元</span> </p>
         <p><span>运费金额</span>  <span>+ ￥ 0.00</span>  </p>
         <p>  <span>应付金额</span>  <span :price="sum">￥：{{(sum)/100}}元</span> </p>
       </div>
     <div class="xian7"></div>

       <van-submit-bar :price="sum" button-text="现在支付" @submit="onSubmit"/>
  </div>
</template>

<script>



export default {
  components: {},
  data() {
    return {
        chosenContactId: '1',
          list: [
        {
          id: '1',
          name: '微信支付',
          tel: '￥￥￥',
          isDefault: true,
        },
        {
          id: '2',
          name: '支付宝',
          tel: '￥￥￥',
        },
         {
          id: '3',
          name: '蚂蚁花呗分期', 
          tel: '￥￥￥',
        },
      ],
       checked: true,
       lists:[],
         show: false,
    };
  },
  computed: {
       sum(){
         return this.lists.reduce((per, cur)=>{
          return per + cur.product.price * cur.quantity;
        }, 0);
        },
  },
  watch: {},

  methods: {
       onClickLeft() {
      this.$router.push('/cart');
      },
       onSubmit(){},
       godress(){
         console.log(11111);
         this.$router.push('/address')
       },
  },
  created() {
      // console.log(this.$route);
      this.lists=this.$route.query.list
      console.log(this.lists);
  },

  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
};
</script>
<style scoped>
.xian1{
  width: 100%;
  height: 2px;
  margin-top: 5px;
  background: #999;
}
.shouhuoxinxi p:nth-child(1){
   font-size: 18px;
    margin:5px 0 0 10px ;
}
.shouhuoxinxi p:nth-child(2) span:nth-child(1){
  display: inline-block;
   font-size: 14px;
    margin:20px 0 0 10px ;
}
.shouhuoxinxi p:nth-child(2) span:nth-child(2){
  display: inline-block;
   font-size: 18px;
   margin:20px 0 0 290px ;
}
.xian2{
     width: 100%;
  height: 5px;
  margin-top: 20px;
  background: #999;
}
/* 支付方式 */
.zhifufangshi p{
    font-size: 18px;
    margin:10px 0 20px 10px ;
}
.xian3{
   width: 100%;
  height: 2px;
  background: #999;
}
.van-contact-list{
  height: 250px;
}
.zhifufangshi li{
   font-size: 18px;
   margin-left: 10px;
   line-height: 24px;
   margin-bottom: 10px;
}


/* 重要提示  */
.tishi span{
   display: inline-block;
   margin: 10px 0 0 10px;
}
.xian4{
    width: 100%;
  height: 5px;
  margin-top: 20px;
  background: #999;
}
/* 用户须知  */
.yonghuxuzhi span{
  display: inline-block;
  font-size: 18px;
  margin: 10px 0 10px 10px ;
}
.yonghuxuzhi p:nth-child(2){
  font-size: 16px;
   margin: 5px 0 10px 10px ;
}
.yonghuxuzhi p:nth-child(3){
  font-size: 16px;
   margin: 5px 0 10px 10px ;
}
/* 警告 */
.jinggao {
  width: 100%;
  height: 60px;
  background:rgb(212,77,68);
  overflow: hidden;
}
.jinggao p{
    font-size: 16px;
    line-height: 18px;
    margin:10px 0 0 10px  ;
}
/* 商品 */
.shangpin p{
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0 0 10px ;
}
.shangpin p span:nth-child(2){
   margin-left: 200px;
}
 
/* 商品 */
.xiangqing{
   display: flex;
}
.zuo img{
  width: 180px;
  height: 120px;
}
.you{
  width: 210px;
} 
.you p:nth-child(1){
  margin: 10px 0 0 20px ;
}
.you p:nth-child(2){
   margin: 20px 0 0 20px ;
   color: red;
}

.money p:nth-child(1){
    font-size: 18px;
    font-weight: 700;
    margin: 10px 0 0 20px ;
}
.money p:nth-child(2),.money p:nth-child(3),.money p:nth-child(4){
    font-size: 18px;
    margin: 10px 0 0 20px ;
}
.money p:nth-child(2) span:nth-child(2),.money p:nth-child(3) span:nth-child(2),.money p:nth-child(4) span:nth-child(2){
   color: red;
   margin-left: 200px;
}



.xian4{
    width: 100%;
  height: 5px;
  margin-top: 20px;
  background: #999;
}
.xian5{
   width: 100%;
  height: 2px;
  margin-top: 10px;
  background: #999;
}
.xian6{
   width: 100%;
  height: 4px;
  margin-top: 10px;
  background: #999;
}
.xian7{
   width: 100%;
  height: 4px;
  margin-top: 10px;
  margin-bottom: 60px;
  background: #999;
}
</style>
