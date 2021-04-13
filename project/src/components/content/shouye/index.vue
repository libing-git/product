<template>
    <div class="message" id="#top">
                <!-- 搜索 -->
          <div class="sousuo" @click="tosousuo">
          <van-sticky>
                 <van-search v-model="value" placeholder="请输入搜索关键词"/>
            </van-sticky>
          </div>

        <!-- weiper -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
         <van-swipe-item>
             <img src="https://resource.smartisan.com/resource/f7e26bf3e77ec39fa230d39ee4d3184a.png?x-oss-process=image/resize,w_828/format,webp" alt="">
         </van-swipe-item>
         <van-swipe-item>
             <img src="https://resource.smartisan.com/resource/15281a93ab968555ba3bd7a911b14f68.png?x-oss-process=image/format,webp" alt="">
         </van-swipe-item>
        </van-swipe>
         
        <!-- 图标分类 -->
        <div class="tubiao">
            <div class="tubiao1" @click="news">
                <van-icon name="star-o" color="#1989fa" />
                <p>新品发布</p>
            </div>
             <div class="tubiao1" @click="jiaoyu">
                <van-icon name="gift" color="red" />
                <p>大力教育</p>
            </div>
             <div class="tubiao1" @click="shouji">
                <van-icon name="plus" color="blue" />
                <p>手机数码</p>
            </div>
             <div class="tubiao1" @click="jianguo">
                <van-icon name="smile-comment-o" color="chartreuse" />
                <p>坚果周边</p>
            </div>
              <div class="tubiao1" @click="newjiu">
                <van-icon name="flower-o" color="forestgreen" />
                <p>以旧换新</p>
            </div>
        </div>

        <!-- 图片 -->
        <div class="img">
            <img src="https://resource.smartisan.com/resource/a2e2329e8429982a5ebff8376be91a97.png?x-oss-process=image/resize,w_828/format,webp" alt="">
        </div>
      
         <!-- 列表 -->
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        >
             <ul class="produtList">
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
        </van-list>

        <!-- 回顶部 -->
        <a href="#top" class="hui">回到顶部</a>
    </div>
</template>
<script>
export default {
    name: "backTop",

    components: {},
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            page: 1,
            per:10,
            value: '',
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
               console.log(res.data.products)
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
        },

        // 新品发布
        news(){
           console.log(11111);
           this.$router.push({path:'/new'})
        },
          //大力教育
         jiaoyu(){
           console.log(11111);
           this.$router.push({path:'/jiaoyu'})
        },
         //手机数码
         shouji(){
           console.log(11111);
           this.$router.push({path:'/shouji'})
        },
          //坚果周边
         jianguo(){
           console.log(11111);
           this.$router.push({path:'/jianguo'})
        },
          //坚果周边
         newjiu(){
           console.log(11111);
           this.$router.push({path:'/newjiu'})
        },
        // 搜索
        tosousuo(){
            console.log(111111);
              this.$router.push({path:'/sousuo'})
        },
    
    },
    created() {
    },
    mounted() {},
    beforeCreate() {}, 
    beforeMount() {},
    beforeUpdate() {}, 
    updated() {}, 
    beforeDestroy() {}, 
    destroyed() {}, 
    
    activated() {}, 
    }
</script>
<style scoped>
html,body{
    margin: 0;
    padding: 0;
}

/* 列表 */
.pimg img{
    width: 200px;
    height: 150px;
}
.produtList{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}
.produtList li{
     width: 200px;
     margin-left: 6px;
}
.pname p{
    font-weight: 700;
    margin: 5px 0;
    line-height: 18px;
     font-size: 14px;
}
.pname span{
    font-size: 18px;
     font-weight: 700;
     color: red;
}
.van-list{
  padding-bottom: 60px;
}



/* swiper */
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .my-swipe img{
    width: 100%;
    height: 300px;
  }
 

  /* 搜索*/
 .sousuo{
     overflow: hidden;
     position: fixed;
     top:0;
     left: 0;
     z-index: 2;
     width:100%;
     height: 50px;
 }
 /* 图标 */
 .tubiao{
     display: flex;
     justify-content: space-between;
     min-height: 30px;
     margin: 20px 0 10px 0;
 }
 .van-icon{
     font-size: 56px;
     margin-left: 10px;
 }
 .tubiao1 p{
     font-size: 18px;
 }

 /* 图片 */
 .img img{
     width: 100%;
     height: 200px;
     margin-top: 20px;
 }


/* 回顶 */
.hui{
    background: yellow;
   position: absolute;
   top: 400px;
   right:50px ;
}
</style>
