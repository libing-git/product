<template>
  <div id="app">
    <router-view></router-view>
    {{title}}
    <Input :msg='list' @changemsg="change"></Input>
    <List :msg='list'></List>
  </div>
</template>

<script>
import List from './components/list/list'
import Input from './components/list/input'
export default {
  name: 'App',
  data () {
    return {
      title:'我是父亲的title',
      list:[1,2,3,4,5,6]
    }
  },
  methods: {
    change(msg){
      this.title = msg
    }
  },
  components: {List,Input}
}
</script>

<style>
</style>
