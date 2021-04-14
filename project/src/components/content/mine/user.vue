<template>
  <van-nav-bar
    title="设置"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
h1 {
  text-align: center;
  line-height: 3rem;
  background-color: black;
  color: aliceblue;
}
</style>
