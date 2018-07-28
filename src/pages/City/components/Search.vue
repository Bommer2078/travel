<template>
    <div class="wrapper">
      <input type="text" class="search-input" placeholder="请输入城市或拼音">
    </div>
</template>

<script>
    export default {
        name: "citySearch"
    }
</script>

<style scoped lang="less">
  @import "~style/variable.less";
    .wrapper{
      height:.7rem;
      background: @bgColor;
      display: flex;
      justify-content: center;
      align-items: center;
      .search-input{
        width: 98%;
        height:.58rem;
        border-radius: .1rem;
        text-align: center;
        color: @darkTextColor;
      }
    }
</style>
