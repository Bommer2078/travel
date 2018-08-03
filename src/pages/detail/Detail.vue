<template>
  <div>
    <detail-banner></detail-banner>
    <detail-Header></detail-Header>
    <div class="content"></div>
  </div>
</template>

<script>
  import detailBanner from './components/Banner'
  import detailHeader from './components/Header'
    export default {
      name: "Detail",
      components:{
        detailBanner,
        detailHeader
      }
    }
</script>

<style scoped>
  .content{
    height:50rem;
  }
</style>
