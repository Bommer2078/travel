<template>
  <div class="my-header">
    <div class="home-header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="home-header-input">
      <span  class="iconfont">&#xe632;</span>
      请填写城市、景点或路线
    </div>
    <div class="home-header-right">
      城市
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang='less'>
  @import '~@/assets/style/variable.less';
  .my-header{
    height: @headerHeight;
    background: @bgColor;
    display:flex;
    color:#fff;
    align-items: center;
    .home-header-left{
      width:.64rem;
      text-align: center;
    }
    .home-header-input{
      height:.64rem;
      line-height: .64rem;
      flex:1;
      background: #fff;
      border-radius: .16rem;
      color:#ccc;
      padding-left:0.1rem;
    }
    .home-header-right{
      margin:0 .05rem;
    }
  }
</style>
