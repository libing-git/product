<template>
    <div class="input">
        <h3>往父元素中添加东西 </h3>
        <div class="add">
            <input type="text" v-model="value">
            <button @click="addlist">添加</button>
        </div>
        <div class="search">
            <label for="">请输入内容</label><input type="text" v-model="val">
            <button @click="update">点击修改父亲传过来的参数</button>
        </div>
    </div>
</template>
<script>
export default {
    props:['msg'],
    components: {},
    data() {
        return {
            val:'',
            value:'',
        };
    },
    methods: {
        update(){
            // this.$emit(,)
            this.$emit('changemsg',this.val)
        },
        addlist(){
            this.msg.push(this.value)
            this.value = ''
        }
    },

    created() {
    },
    mounted() {
    },
}
</script>
<style scoped>
</style>