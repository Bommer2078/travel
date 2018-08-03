<template>
  <div class="city-letter">
    <ul>
      <li
        v-for="(key) of arr"
        class="letter"
        :key="key"
        :ref="key"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @Touchend="handleTouchEnd"
      >{{key}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "cityLetter",
      data(){
        return {
          touched:false,
          timer:null
        }
      },
      props:{
        cities:Object,
      },
      methods:{
        handleLetterClick(e){
          this.$store.commit('letterClick',e.target.innerHTML)
        },
        handleTouchStart(){
          this.touched = true
        },
        handleTouchMove(e){
          if(this.touched) {
            if (this.timer) {
              clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {

              const theLetter = Math.floor((e.touches[0].clientY - 145) / 18)
              if (theLetter < this.arr.length && theLetter >= 0) {
                this.$store.commit('letterMove', this.arr[theLetter])
              }
            }, 16)
          }
        },
        handleTouchEnd(){
          this.touched = false
        }
      },
      computed:{
        arr(){
          const arr = []
          for(let k in this.cities){
            arr.push(k)
          }
          return arr
        }
      }
    }
</script>

<style scoped lang="less">
  @import "~style/variable.less";
  .city-letter{
    position: fixed;
    top:2.9rem;
    right:0.12rem;
    .letter{
      margin-bottom:.08rem;
      color: @bgColor;
      text-align: center;
    }
  }
</style>
