<template>
  <header class="city-header" :style="showHeader">
    <router-link to="/" tag="div">
      <span class="go-back iconfont">&#xe624;</span>
    </router-link>
    <span class="title">景点详情</span>
  </header>
</template>

<script>
  export default {
    name: "detailHeader",
    data(){
      return {
        showHeader:{
          opacity:0
        }
      }
    },
    methods:{
      handleScroll(){
        const scroll = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        if(scroll > 60){
            this.showHeader.opacity = scroll>140?1:(scroll-60)/40
          }
          else{
            this.showHeader.opacity = 0
        }
      }
    },
    activated (){
      window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
      this.showHeader.opacity = 0
      window.removeEventListener('scroll',this.handleScroll)
    }
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
    z-index: 50;
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
