<template>
<div>
  <city-header></city-header>
  <city-search></city-search>
  <city-list :hotCities="hotCities" :cities="cities"></city-list>
  <city-letter :cities="cities"></city-letter>
</div>
</template>

<script>
    import axios from 'axios'
    import cityHeader from './components/Header'
    import citySearch from './components/Search'
    import cityList from './components/List'
    import cityLetter from './components/Letter'
    export default {
        name: "City",
        data(){
          return {
            hotCities:[],
            cities:{}
          }
        },
        components:{
          cityHeader,
          citySearch,
          cityList,
          cityLetter
        },
        methods:{
          getListData:function(data){
            console.log(data)
            if(data.ret && data){
              this.addListData(data.data)
            }
          },
          addListData:function(data){
            this.hotCities = data.hotCities
            this.cities = data.cities
          }
        },
        mounted(){
          axios.get('/api/city.json').then((res)=>{
            console.log(res)
            const data = res.data
            this.getListData(data)
          })
        }
    }
</script>

<style scoped>

</style>
