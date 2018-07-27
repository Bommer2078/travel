<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="/static/pics/banner/8e4a1c3f470d3702.jpg_640x170_c1e8baeb.jpg">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "homeSwiper",
        data (){
          return {
            swiperOption:{
              pagination: '.swiper-pagination',
              loop:true
            }
          }
        }
    }
</script>

<style scoped lang="less">
  @import '~style/variable.less';
  .wrapper /deep/ .swiper-pagination-bullet-active{
    background: #fff !important;
  }
  .wrapper{
    width: 100%;
    height:0;
    padding-bottom:31.25%;
    background: #eee;
    margin-bottom: .05rem;
    img{
      width: 100%;
      height: 31.25vw;
    }
  }
</style>
