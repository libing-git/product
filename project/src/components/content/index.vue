<template>
    <div class="ind">
        <transition :name="transitionName" mode="out-in">
			<router-view></router-view>
		</transition>
       <Footer v-if="$route.meta.showTabbar"></Footer>
    </div>
</template>
<script>
import Footer from './footer/index'

// 引用封装的axios方法
// import {get,post} from '../../utils/request'
export default {
    components: {Footer},
    data() {
        return {
            transitionName:''
        };
    },
    methods: {
        
    },
    created() {
        
    },
    watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
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

body{
  padding-bottom: 100px;
}
    .ind{
    position: relative;
    }
    .ind>*{
    position: absolute;
    width: 100%;
    }
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
    will-change: transform;
    transition: all 0.3s;
    position: absolute;
    }
    .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    }
    .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    }
    .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    }
    .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    }
</style>