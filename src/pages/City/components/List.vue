<template>
  <div class="list">
    <div class="tiltle border-topbottom">当前城市</div>
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

    <div class="all-city" v-for="(items,key) of cities" :key="key">
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
</template>

<script>
  export default {
    name: "currList",
    props:{
      hotCities:Array,
      cities:Object
    },
    methods:{
      changeCurr(name){
        console.log(this.$store)
        this.$store.commit('changeCurrCity',name)
      }
    },
    computed:{
      currCity (){
        return this.$store.state.currCity
      }
    },
    mounted (){
      console.log(this.hotCities)
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
