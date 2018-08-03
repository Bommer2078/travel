<template>
    <div class="content">
      <div
        class="ticket"
        v-for="(items,index) of ticketList"
        :key="index"
      >
        <div class="ticket-title border-bottom">
          <i class="iconfont">&#xe760;</i>
          <span>{{items.title}}</span>
        </div>
        <div
          class="diff-ticket border-topbottom"
          v-for="(item,index) of items.diffTicket"
          :key="index"
        >
          <div class="ticket-wrapper">
            <div class="ticket-desc">
              {{item.title}}
              <p>{{item.desc}}</p>
            </div>
          </div>
          <div class="ticket-cost">
            <span class="ticket-cost-num"><sup>¥</sup>{{item.cost}}</span>
            <span>起</span>
            <i class="iconfont">&#xe625;</i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "detailList",
      props:{
        ticketList:Array
      }
    }
</script>

<style scoped lang="less">
  @import "~style/ellipsis.less";
  @import "~style/variable.less";
  .content{
    position: relative;
    z-index: 2;
    border-radius: .1rem .1rem 0 0;
    margin-top:-.08rem;
    padding-top:.08rem;
    color: @darkTextColor;
    background: #fff;
    .ticket-title{
      padding-left: .2rem;
      font-size: .32rem;
      line-height: .8rem;
      >i{
        width: .4rem;
        height: .4rem;
        height: .4rem;
        line-height: .5rem;
        color:#fff;
        text-align: center;
        border-radius: 50%;
        background: #abcdef;
      }
    }
    .diff-ticket{
      display: flex;
      padding:.2rem;
      align-items: center;
      justify-content: space-between;
      .ticket-wrapper{
        flex:5;
        margin-right: .2rem;
        line-height: .4rem;
        .ticket-desc{
          font-size: .24rem;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          > p {
            display: inline;
            font-size: .16rem;
            color:#ccc;
          }
        }
      }
      .ticket-cost{
        flex:2;
        text-align: right;
        color:lightsalmon;
      }
    }
  }
</style>
