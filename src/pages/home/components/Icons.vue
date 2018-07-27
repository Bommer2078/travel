<template>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="home-icons">
          <div class="home-icon" v-for="item of page" :key="item.id">
            <img :src="item.src"/>
            <p>{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
</template>

<script>
    export default {
        name: "Icons",
        data (){
          return {
            swiperOption:{
              autoplay:false
            },
            icons:[
              {id: "0001",src:'/static/pics/icons/ace00878a52d9702.png',desc:'旅游景点旅游景点旅游景点旅游景点旅游景点'},
              {id: "0002",src:'/static/pics/icons/ace00878a52d9702.png',desc:'旅游景点'},
              {id: "0003",src:'/static/pics/icons/ace00878a52d9702.png',desc:'旅游景点'},
              {id: "0004",src:'/static/pics/icons/ace00878a52d9702.png',desc:'旅游景点'},
              {id: "0005",src:'/static/pics/icons/ace00878a52d9702.png',desc:'旅游景点'},
              {id: "0006",src:'/static/pics/icons/ace00878a52d9702.png',desc:'旅游景点'},
              {id: "0007",src:'/static/pics/icons/ace00878a52d9702.png',desc:'旅游景点'},
              {id: "0008",src:'/static/pics/icons/ace00878a52d9702.png',desc:'旅游景点'},
              {id: "0008",src:'/static/pics/icons/ace00878a52d9702.png',desc:'旅游景点'}
            ]
          }
        },
        computed:{
          pages (){
            const pages = [];
            this.icons.forEach((item,index)=>{
              const page = Math.floor(index/8);
              if(!pages[page]){
                pages[page] = [];
              }
              pages[page].push(item);
            })
            return pages
          }
        }
    }
</script>

<style scoped lang="less">
  @import '~style/ellipsis.less';
  .home-icons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: .12rem;
    .home-icon{
      width: 25%;
      height: 25vw;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      > img{
        width: 60%;
        margin-bottom: .15rem;
      }
      > p {
        width: 100%;
        text-align: center;
        .ellipsis
      }
    }
  }
</style>
