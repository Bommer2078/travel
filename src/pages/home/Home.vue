<template>
  <div class="home-content" ref="homeScroll">
    <div>
      <home-header :city="currCity"></home-header>
      <home-swiper :dataList="swiperList"></home-swiper>
      <home-icons :dataList="iconsList"></home-icons>
      <home-recommed :dataList="recommendList"></home-recommed>
      <home-weekend :dataList="weekendList"></home-weekend>
    </div>
  </div>
</template>

<script>
  import homeHeader from './components/Header'
  import homeSwiper from './components/Swiper'
  import homeIcons from './components/Icons'
  import homeRecommed from './components/Recommed'
  import homeWeekend from './components/Weekend'
  import axios from 'axios'
  import Bscroll from 'better-scroll'
  export default {
    name: "Home",
    data (){
      return {
        lastCity:'',
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
    computed:{
      currCity(){
        return this.$store.state.currCity
      }
    },
    methods:{
      getHomeInfo (){
        axios.get('/api/index.json?city=' + this.currCity)
          .then((res)=>{
            this.getHomeInfoSucc(res.data)
          })
      },
      getHomeInfoSucc (res){
        if(res.ret&&res.data){
          const data = res.data
          this.swiperList = data.swiperList
          this.iconsList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    },
    mounted (){
      this.scroll = new Bscroll(this.$refs.homeScroll)
    },
    activated (){
      if(this.lastCity != this.currCity){
        this.lastCity = this.currCity
        this.getHomeInfo()
      }
    }
  }
</script>

<style scoped>
  .home-content{
    overflow: hidden;
    position:absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
