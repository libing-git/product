<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      @click-left="onClickLeft"
      left-arrow
    />
    <div>
      
    </div>
  </div>
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

<style></style>
