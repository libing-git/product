<template>
    <div class="detail">
           <div class="proDetail">
               <div class="proimg" v-if="product">
                   <img :src="product.coverImg" alt="">
               </div>
               <div class="productText" v-if="product">
                   <p>{{product.name}}</p>
                   <span>{{product.descriptions}}</span>
               </div>
              
           </div>
            <van-stepper v-model="value" integer />
            <van-button type="primary" block @click="addCart">加入购物车</van-button>
    </div>
</template>

<script>
import {reqAddcart} from '../api/vart'
export default {
    
    components: {},
    data() {
        
        return {
            product:null,
            value:'',
            id:'',
        };
    },
    methods: {
        initDetail(id){
            this.$http.get(`http://localhost:3009/api/v1/products/${id}`).then(res=>{
                console.log(res)
                if(res.status === 200){
                    this.product = res.data
                }
            })
        },
       async addCart(){
           const result = await reqAddcart({product:this.id,quantity:this.value})
           console.log(result)
           if(result.status === 200){
               this.$router.push('/cart')
           }

        },
    },
    created() {
        this.id = this.$route.query.id
        let id = this.$route.query.id;
        this.initDetail(id)
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
    activated() {

    }, 
    }
</script>
<style scoped>
.proDetail{
    display: flex;
    align-items: center;
}
.proDetail img{
    width: 80px;
}
.proDetail span{
    color: gray;
}
.proDetail p{
    margin-bottom: 10px;
}
</style>
