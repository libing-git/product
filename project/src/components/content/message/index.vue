<template>
    <div class="message">
        <van-nav-bar title="标题" left-text="返回" left-arrow :fixed="true">
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
            <!-- <van-cell v-for="item in list" :key="item._id" :title="item.name" />
             -->
             <ul class="produtList">
                <li v-for="item in list" :key="item._id" @click="proDetail(item._id)">
                    <div class="pimg">
                        <img :src="item.coverImg" alt="">
                    </div>
                    <div class="pname">
                        <p>{{item.name}}</p>
                        <span>{{item.descriptions}}</span>
                    </div>
                </li>
             </ul>
        </van-list>
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
            per:10
        };
    },
    methods: {
        onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
           this.$http.get('http://localhost:3009/api/v1/products',{params:{
               page:this.page,
           }
           }).then(res=>{
               console.log(res)
               if(res.status === 200){
                   if(res.data.products.length < 10){
                       this.finished = true;
                      
                   } else {
                        this.loading = false
                        ++this.page 
                   }
                    this.list = this.list.concat(res.data.products)
               }
           })
        },
        proDetail(id){
            this.$router.push({
                path:'/detail',
                query:{id}
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
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated() {}, 
    }
</script>
<style scoped>
.van-list{

    padding-top: 50px;
    padding-bottom: 40px;
}
.produtList li{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.produtList img{
    width: 80px;
    height: 80px;
}
.produtList li span{
    color: gray;
    display: block;
    /* margin-top: 10px; */
    line-height: 20px;
}
.produtList li p{
    line-height: 20px;
}
</style>