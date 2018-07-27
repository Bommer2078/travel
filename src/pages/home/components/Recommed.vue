<template>
<div class="home-recommend">
  <div class="tiltle">
    <h3>热销推荐</h3>
  </div>
  <ul class="items">
    <li class="item" v-for="item of recommedList" :key="item.id">
      <img class="item-img" :src="item.src"/>
      <div class="item-detail">
        <h4 class="item-tiltle">{{item.tiltle}}</h4>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "Recommed",
        data(){
          return {
            recommedList:[
              {id:'001',src:'static/pics/Recommend/d1ebc7261517f002.jpg_240x220_c4ec8668.jpg',tiltle:'大连圣亚海洋世界',desc:'浪漫大连首站，浪漫的海洋主题公园'},
              {id:'001',src:'static/pics/Recommend/d1ebc7261517f002.jpg_240x220_c4ec8668.jpg',tiltle:'大连圣亚海洋世界',desc:'浪漫大连首站，浪漫的海洋主题公园'},
              {id:'001',src:'static/pics/Recommend/d1ebc7261517f002.jpg_240x220_c4ec8668.jpg',tiltle:'大连圣亚海洋世界',desc:'浪漫大连首站，浪漫的海洋主题公园'},
              {id:'001',src:'static/pics/Recommend/d1ebc7261517f002.jpg_240x220_c4ec8668.jpg',tiltle:'大连圣亚海洋世界',desc:'浪漫大连首站，浪漫的海洋主题公园'},
              {id:'001',src:'static/pics/Recommend/d1ebc7261517f002.jpg_240x220_c4ec8668.jpg',tiltle:'大连圣亚海洋世界',desc:'浪漫大连首站，浪漫的海洋主题公园'}
            ]
          }
        }
    }
</script>

<style scoped lang="less">
  @import "~style/ellipsis.less";
  .home-recommend{
    background: #abcdef;
    .tiltle{
      height:.8rem;
      line-height: .8rem;
      background: #eee;
      padding-left:0.3rem;
    }
    .item{
      background: #fff;
      height: 1.9rem;
      display: flex;
      margin-bottom:.12rem;
      .item-img{
        width: 1.7rem;
        height:1.7rem;
        padding:.1rem
      }
      .item-detail{
        overflow: hidden;
        flex:1;
        padding:.1rem;
        .item-tiltle{
          font-size: .32rem;
          line-height: .54rem;
          font-weight: 700;
          .ellipsis
        }
        .item-desc{
          line-height: .4rem;
          color: #ccc;
          margin-bottom:.16rem;
          .ellipsis
        }
        .item-button{
          line-height: .44rem;
          background: #ff9300;
          padding:0 .2rem;
          border-radius: .06rem;
          color:#fff;
        }
      }
    }
  }

</style>
