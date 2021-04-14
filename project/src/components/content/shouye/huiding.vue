<template>
  <div class="backtop" @click="backClick" id="scrollto">
    回到顶部
  </div>
</template>

<script>
export default {
  name: "backTop",
  methods: {
    backClick() {
      // 回到顶
      // console.log(11);
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0;
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);

      // 监听页面 显示回到顶部隐藏
      window.onscroll = function() {
        if (
          document.documentElement.scrollTop + document.body.scrollTop >
          100
        ) {
          document.getElementById("scrollto").style.display = "block";
        } else {
          document.getElementById("scrollto").style.display = "none";
        }
      };
    },
  },
};
</script>

<style scoped>
.backtop {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: pink;
  /* opacity: 0.5; */
  text-align: center;
  line-height: 50px;
  font-size: 12px;
  color: black;
  position: fixed;
  right: 30px;
  bottom: 60px;
  z-index: 10;
}
</style>