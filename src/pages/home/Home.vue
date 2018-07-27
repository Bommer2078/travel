<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommed></home-recommed>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
  import homeHeader from './components/Header'
  import homeSwiper from './components/Swiper'
  import homeIcons from './components/Icons'
  import homeRecommed from './components/Recommed'
  import homeWeekend from './components/Weekend'
  export default {
    name: "Home",
    components: {
      homeHeader,
      homeSwiper,
      homeIcons,
      homeRecommed,
      homeWeekend
    }
  }
</script>

<style scoped>

</style>
