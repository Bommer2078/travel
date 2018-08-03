<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="tiltle border-topbottom" ref="scrolToTop">当前城市</div>
      <div class="items border-bottom">
        <div class="button-warpper">
          <div type="button" class="list-item">{{currCity}}</div>
        </div>
      </div>

      <div class="tiltle border-topbottom">热门城市</div>
      <div class="items border-bottom">
        <div class="button-warpper"
             v-for="item of hotCities"
             :key="item.id"
             @click="changeCurr(item.name)">
          <div type="button" class="list-item">{{item.name}}</div>
        </div>
      </div>
      <div class="all-city"
           v-for="(items,key) of cities"
           :key="key"
           :ref="key"
      >
        <div class="tiltle border-topbottom">{{key}}</div>
        <ul >
          <li
            class="allcity-item border-bottom"
            v-for="item of items"
            :key="item.key"
            @click="changeCurr(item.name)">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: "currList",
    props:{
      hotCities:Array,
      cities:Object
    },
    methods:{
      changeCurr(name){
        this.$store.commit('changeCurrCity',name)
        this.$router.push('/')
      }
    },
    computed:{
      currCity (){
        return this.$store.state.currCity
      },
      letter (){
        return this.$store.state.letter
      }
    },
    mounted (){
      this.scroll = new Bscroll(this.$refs.wrapper,{click:true})
    },
    watch:{
      letter (){
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    },
    activated (){
      const element = this.$refs['scrolToTop']
      this.scroll.scrollToElement(element)
    }
  }
</script>

<style scoped lang="less">
  .border-topbottom{
    &:before,&:after{
      border-color: #ccc;
    }
  }
  .border-bottom{
    &:after{
      border-color: #ccc;
    }
  }
  .list{
    overflow: hidden;
    position:absolute;
    width: 100%;
    top:1.56rem;
    bottom:0;
    .tiltle{
      padding:.02rem 0;
      line-height: .46rem;
      background: #eee;
      text-indent: .25rem;
    }
    .items{
      overflow: hidden;
      background: #fff;
      padding: .1rem .6rem .1rem .1rem;
      width: 100%;
      box-sizing: border-box;
      .button-warpper{
        float: left;
        width: 33.33%;
        .list-item {
          margin:.1rem;
          padding:.1rem 0;
          text-align: center;
          border: .02rem solid #ccc;
          background: #fff;
          border-radius: .06rem;
        }
      }
    }
  }
  .allcity-item{
    text-indent: .25rem;
    line-height: .76rem;
  }
</style>
