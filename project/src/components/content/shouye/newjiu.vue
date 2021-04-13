<!--  -->
<template>
<div class='newjiu'>
    <van-nav-bar
      title="锤子商城"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    >
    </van-nav-bar>

     <div class="box">
         <div class="box1">
           <p>锤子商城</p>
           <van-rate v-model="value" readonly />

          <van-tabs background='#999'>
          <van-tab v-for="index in 4" :title="'标签 ' + index" :key="index" >
          </van-tab>
          </van-tabs>
         </div>
          <img src="https://sf3-ttcdn-tos.pstatp.com/obj/temai/1609840116bc05bf22be56e8263b8cf010350e9df4fc40d472" alt="">
     </div>
    
    <div class="jingxuan">
      <p>精选推荐</p>
      <span>没有更多了</span>
    </div>
</div>
</template>

<script>

export default {
components: {},
data() {
return {
     value: 4,
      active: 2,
};
},
computed: {},
watch: {},
methods: {
   onClickLeft(){
       this.$router.push({path:'/shouye'})
   }
},
created() {

},
mounted() {

},
beforeCreate() {},
beforeMount() {}, 
beforeUpdate() {}, 
updated() {}, 
beforeDestroy() {},
destroyed() {}, 
activated() {}, 
}
</script>
<style  scoped>
.box{
  margin-top: 50px;
  background:#999;
}
.box1{
  margin-left: 80px;
  font-size: 18px;
}
.box img{
 width: 414px;
}
.jingxuan p{
  margin: 20px 0 0 10px ;
  font-size:30px ;
}
.jingxuan span{
  display: block;
  font-size:16px;
  margin: 30px 0 0 160px;
}
</style>