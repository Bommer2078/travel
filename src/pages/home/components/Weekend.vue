<template>
  <div class="home-weekend">
    <div class="tiltle">
      <h3>周末去哪儿</h3>
    </div>
    <ul class="items">
      <li class="item" v-for="item of dataList" :key="item.id">
        <div class="wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-detail">
          <h4 class="item-tiltle">{{item.tiltle}}</h4>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Weekend",
    props:{
      dataList:Array
    }
  }
</script>

<style scoped lang="less">
  @import "~style/ellipsis.less";
  @import "~style/variable.less";
  .home-weekend{
    .tiltle{
      height:.8rem;
      line-height: .8rem;
      background: #eee;
      padding-left:0.3rem;
    }
    .item{
      .wrapper{
        overflow: hidden;
        height:0;
        width: 100%;
        padding-bottom: 38%;
        background: #eee;
        .item-img{
          width: 100%;
        }
      }
      .item-detail{
        overflow: hidden;
        flex:1;
        padding:.15rem;
        .item-tiltle{
          font-size: .32rem;
          line-height: .54rem;
          font-weight: 700;
          color: @darkTextColor;
          .ellipsis
        }
        .item-desc{
          line-height: .4rem;
          color: #aaa;
          margin-bottom:.16rem;
          .ellipsis
        }
      }
    }
  }

</style>
