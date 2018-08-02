<template>
  <div>
    <detail-banner></detail-banner>
    <detail-Header></detail-Header>
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

</style>
