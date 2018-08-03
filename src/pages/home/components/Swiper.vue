<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of dataList" :key="item.id">
        <img :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "homeSwiper",
        props:{
          dataList:Array
        },
        data (){
          return {
            swiperOption:{
              pagination: '.swiper-pagination',
              autoplay: 3000,
              autoplayDisableOnInteraction:false,
              loop:true
            },
          }
        },
        computed:{
          showSwiper(){
            return this.dataList.length
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
