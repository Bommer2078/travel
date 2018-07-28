<template>
    <header class="city-header">
      <router-link to="/" tag="div">
        <span class="go-back iconfont">&#xe624;</span>
      </router-link>
      <span class="title">城市选择</span>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="less">
  @import "~style/variable.less";
  .city-header{
    height: @headerHeight;
    background: @bgColor;
    color:#fff;
    line-height: @headerHeight;
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
