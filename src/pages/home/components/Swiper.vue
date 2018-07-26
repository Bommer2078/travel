<template>
  <swiper :options="swiperOption">
     <!--slides -->
    <swiper-slide>
      img
    </swiper-slide>
     <!--Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
    export default {
        name: "homeSwiper",
        data(){
          return {
            swiperOption:{}
          }
        }
    }
</script>

<style scoped>

</style>
