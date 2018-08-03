<template>
  <div>
    <div class="wrapper">
      <input v-model="keyword" type="text"
             class="search-input"
             placeholder="请输入城市或拼音"
      >
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li v-show="hasData">没有找到匹配的城市</li>
        <li v-for="(item,index) of list"
            :key="index"
            @click="changeCurr(item)"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
    export default {
      name: "citySearch",
      props:{
        cities:Object
      },
      data(){
        return {
          keyword:'',
          list:[],
          timer:null,
        }
      },
      watch:{
        keyword (){
          if(this.timer){
            clearTimeout(this.timer)
          }
          if(!this.keyword){
            this.list= []
            return
          }
          this.timer = setTimeout(()=>{
            const result = []
            for(let k in this.cities){
              this.cities[k].forEach((item) =>{
                if(item.spell.indexOf(this.keyword) > -1||item.name.indexOf(this.keyword) > -1){
                  result.push(item.name)
                }
              })
            }
            this.list = result
          },100)
        }
      },
      methods:{
        changeCurr(name){
          this.$store.commit('changeCurrCity',name)
          this.keyword = ''
          this.$router.push('/')
        }
      },
      computed:{
          hasData(){
            return !this.list.length
          }
      },
      mounted(){
        this.scroll = new Bscroll(this.$refs.search,{click:true})
      }
    }
</script>

<style scoped lang="less">
  @import "~style/variable.less";
    .wrapper{
      position: fixed;
      width: 100%;
      top:@headerHeight;
      left:0;
      height:.7rem;
      background: @bgColor;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      .search-input{
        width: 98%;
        height:.58rem;
        border-radius: .1rem;
        text-align: center;
        color: @darkTextColor;
      }
    }
    .search-content{
      z-index: 1 ;
      overflow: hidden ;
      position: absolute ;
      top: 1.58rem ;
      left: 0 ;
      right: 0 ;
      bottom: 0 ;
      background: #eee ;
      > ul >li{
        line-height: .68rem;
        padding-left:.2rem;
        background: #fff;
        color:#666;
      }
    }
</style>
