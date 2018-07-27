<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :dataList="swiperList"></home-swiper>
    <home-icons :dataList="iconsList"></home-icons>
    <home-recommed :dataList="recommendList"></home-recommed>
    <home-weekend :dataList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import homeHeader from './components/Header'
  import homeSwiper from './components/Swiper'
  import homeIcons from './components/Icons'
  import homeRecommed from './components/Recommed'
  import homeWeekend from './components/Weekend'
  import axios from 'axios'
  export default {
    name: "Home",
    data (){
      return {
        city:'',
        swiperList:[],
        iconsList:[],
        recommendList:[],
        weekendList:[]
      }
    },
    components: {
      homeHeader,
      homeSwiper,
      homeIcons,
      homeRecommed,
      homeWeekend
    },
    methods:{
      getHomeInfo (){
        axios.get('/api/index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res){
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    },
    mounted (){
      this.getHomeInfo()
    }
  }
</script>

<style scoped>

</style>
