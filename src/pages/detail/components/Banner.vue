<template>
<section>
  <div class="banner">
    <span class="go-back iconfont" @click="handleEscClick">&#xe624;</span>
    <img @click="handleBannerClick" :src="bannerImgUrl" alt="">
    <div class="banner-info">
      <div class="banner-tiltle">{{sightName}}</div>
      <div class="banner-number">
        <span class="iconfont">&#xe608;</span>
        <span>{{picNum}}</span>
      </div>
    </div>
  </div>
  <fade-animation>
    <banner-gallary
      @close="handleGallaryClose"
      v-show="showGallary"
      :gallaryImgUrl="gallaryImgUrl"
    ></banner-gallary>
  </fade-animation>
</section>
</template>

<script>
  import bannerGallary from './gallary'
  import fadeAnimation from './fadeAnimation'
    export default {
        name: "detailBanner",
      props:{
        bannerImgUrl:String,
        gallaryImgUrl:Array,
        sightName:String
      },
      computed:{
        picNum(){
          return this.gallaryImgUrl.length
        }
      },
      data(){
        return {
          showGallary:false
        }
      },
      methods:{
        handleGallaryClose(){
          this.showGallary = false
        },
        handleBannerClick(){
          this.showGallary = true
        },
        handleEscClick(){
          this.$router.push('/')
        }
      },
      components:{
        bannerGallary,
        fadeAnimation
      }
    }
</script>

<style scoped lang="less">
  @import "~style/variable.less";
  .banner{
    width: 100%;
    height: 0;
    padding-bottom: 55%;
    background: #eee;
    color: #fff;
    position: relative;
      .go-back{
        position: absolute;
        top: .5em;
        left: .5em;
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        background: #000;
        border-radius: 50%;
        opacity:0.6;
      }
      >img{
       width:100%;
      }
      .banner-info{
        position:absolute;
        bottom: 0;
        left:0;
        right:0;
        height:.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .2rem;
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
        .banner-tiltle{
          color: lightblue;
          font-size: .24rem;
        }
        .banner-number{
          padding:.05rem;
          border-radius: .1rem;
          opacity: 0.6;
          background: #000;
        }
      }
  }
</style>
