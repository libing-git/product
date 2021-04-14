<!--  -->
<template>
<div class='sousuo'>
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
       <span v-for='(name,index) in listname' :key='index' @click='search(name.name)' > {{name.name}} </span>
   </div>

   <div class="liebiao" v-for="item in lists" :key="item._id">
      <div class="left">
           <img :src="item.coverImg" alt="">
      </div>
      <div class="right">
           <p>{{item.content}}</p>
           <p>{{item.name}}</p>
       <span>{{item.price}}</span>
      </div>


    
   </div>

     <!-- 点击搜索 -->
     <div class="liebiaos" v-for="item in names" :key="item._id">
      <div class="lefts">
           <img :src="item.coverImg" alt="">
      </div>
      <div class="rights">
           <p>{{item.content}}</p>
           <p>{{item.name}}</p>
       <span>{{item.price}}</span>
      </div>
     </div>
</div>
</template>

<script>

export default {
components: {},
data() {
return {
       value: '',
       lists:[],
       listname:[
           {
               name:'口红'
           },
            {
               name:'蓝牙耳机 '
           },
            {
               name:'手机 '
           },
            {
               name:'耳机  '
           },
            {
               name:'坚果快充'
           },
            {
               name:'坚果 R2 保护套  '
           },
       ],
       names:[],
};
},
computed: {},
watch: {},
methods: {
      onSearch(val) {
       this.$http.get('http://localhost:3009/api/v1/products',{params:{
               page:this.page,
               name:val,
           }
           }).then(res=>{
               console.log(res.data.products);
                this.lists=res.data.products
           })
    },
    onCancel() {
      this.$router.push({path:'/shouye'})
    },

// 点击搜索
   search(name){    
    //    console.log(1111);
     this.$http.get('http://localhost:3009/api/v1/products',{params:{
               page:this.page,
               name:name,
           }
           }).then(res=>{
               console.log(res.data.products);
                this.names=res.data.products
           })
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
    margin-left: 20px;
}
.box p{
    font-size: 16px;
    color: #888;
    margin: 0 0 10px 0;
}
.box span{
    display: inline-block;
    height: 18px;
    border-radius:9px;
    padding: 0 15px;
    margin: 5px 5px;
    background: violet;
}

/* liebiao  */
.liebiao{
    display: flex;
}
.left img{
    width: 200px;
    height: 100px;
    float: left;
}
.right p{
    margin:10px 0 10px 10px  ;
    font-size: 18px;
}
.right span{
    font-size: 16px;
    color: red;
    margin: 0 0 0 20px;
}



.liebiaos{
    display: flex;
}
.lefts img{
    width: 200px;
    height: 100px;
    float: left;
}
.rights p{
    margin:10px 0 10px 10px  ;
    font-size: 18px;
}
.rights span{
    font-size: 16px;
    color: red;
    margin: 0 0 0 20px;
}
</style>