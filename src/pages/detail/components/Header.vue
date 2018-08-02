<template>
  <header class="city-header">
    <router-link to="/" tag="div">
      <span class="go-back iconfont">&#xe624;</span>
    </router-link>
    <span class="title">热门推荐</span>
  </header>
</template>

<script>
  export default {
    name: "detailHeader"
  }
</script>

<style scoped lang="less">
  @import "~style/variable.less";
  .city-header{
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    height: @headerHeight;
    background: @bgColor;
    color:#fff;
    line-height: @headerHeight;
    z-index: 1;
    .go-back{
      float: left;
      margin-left:.2rem;
    }
    .title{
      display: block;
      width:1.15rem;
      margin:0 auto;
    }
  }
</style>
