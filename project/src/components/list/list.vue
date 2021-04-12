<template>
    <div class="">
        <div class="list">
            <ul>
                <li> 我是list组件</li>
                <li v-for="(item,index) in msg" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:['msg'],
    components: {},
    data() {
        
        return {
            
        };
    },
    methods: {
        
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
</style>