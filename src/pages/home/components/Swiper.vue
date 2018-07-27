<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.src">
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
            },
            swiperList:[
              {id:'001',src:'/static/pics/banner/8e4a1c3f470d3702.jpg_640x170_c1e8baeb.jpg'},
              {id:'002',src:'/static/pics/banner/44fce1467be17702.jpg_640x170_ae6ad5e0.jpg'},
              {id:'003',src:'/static/pics/banner/858481b3e2d65802.png_640x170_90ebc386.png'},
              {id:'004',src:'/static/pics/banner/c72a1ccd4d7b2202.jpg_640x170_a4d1cf68.jpg'}
            ]
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
    img{
      width: 100%;
      height: 31.25vw;
    }
  }
</style>
