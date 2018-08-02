<template>
    <swiper :options="swiperOption" class="icon-swiper">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="home-icons">
          <div class="home-icon" v-for="item of page" :key="item.id">
            <img :src="item.imgUrl"/>
            <p>{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
</template>

<script>
    export default {
        name: "Icons",
        props:{
          dataList:Array
        },
        data (){
          return {
            swiperOption:{
              autoplay:false
            }
          }
        },
        computed:{
          pages (){
            const pages = [];
            this.dataList.forEach((item,index)=>{
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
  @import '~style/variable.less';
  .icon-swiper{
    margin-bottom:.02rem;
    .home-icons{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-size: .12rem;
      color:@darkTextColor;
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
  }
</style>
