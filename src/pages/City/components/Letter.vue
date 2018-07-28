<template>
  <div class="city-letter">
    <ul>
      <li v-for="(item,key) of cities" class="letter" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "cityLetter",
        props:{
          cities:Object
        }
    }
</script>

<style scoped lang="less">
  @import "~style/variable.less";
  .city-letter{
    position: fixed;
    top:2.9rem;
    right:0.12rem;
    .letter{
      margin-bottom:.08rem;
      color: @bgColor;
      text-align: center;
    }
  }
</style>
