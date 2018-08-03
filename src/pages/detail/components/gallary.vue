<template>
  <div @click="handleGallaryClick" class="gallary">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(pic,index) of gallaryImgUrl" :key="index">
          <img :src="pic" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
    export default {
      name: "gallary",
      props:{
        gallaryImgUrl:Array
      },
      data(){
        return {
          swiperOptions: {
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            observeParents: true,
            observer: true
          }
        }
      },
      methods:{
        handleGallaryClick(){
          this.$emit('close')
        }
      }
    }
</script>

<style scoped lang="less">
  .gallary /deep/ .swiper-container{
    overflow: inherit;
  }
  .gallary{
    z-index:99;
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000;
    .wrapper{
      height:auto;
      width: 100%;
      img{
        width:100%;
      }
      .swiper-pagination{
        color:#fff;
        margin-bottom: -2rem;
      }
    }
  }
</style>
