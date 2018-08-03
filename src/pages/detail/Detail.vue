<template>
  <div>
    <detail-banner
      :bannerImgUrl="bannerImgUrl"
      :gallaryImgUrl="gallaryImgUrl"
      :sightName="sightName"
    ></detail-banner>
    <detail-Header></detail-Header>
    <detail-List :ticketList="ticketList"></detail-List>
  </div>
</template>

<script>
  import detailBanner from './components/Banner'
  import detailHeader from './components/Header'
  import detailList from './components/List'
  import axios from 'axios'
    export default {
      name: "Detail",
      data(){
        return {
          bannerImgUrl:'',
          gallaryImgUrl:[],
          ticketList:[],
          sightName:''
        }
      },
      components:{
        detailBanner,
        detailHeader,
        detailList
      },
      methods:{
        handleGetData(){
          axios.get('/api/detail.json',{
            params:{
              id:this.$route.params.id
            }
          }).then((res)=>{
              let resoult = res.data
              if(resoult.ret&&resoult.data){
                this.sendData(resoult.data)
              }
            }
          )
        },
        sendData(res){
          this.bannerImgUrl = res.bannerImg
          this.gallaryImgUrl = res.gallaryImgs
          this.ticketList = res.categoryList
          console.log(this.ticketList)
          this.sightName = res.sightName
        }
      },
      activated(){
        this.handleGetData()
      }
    }
</script>

<style scoped>
</style>
