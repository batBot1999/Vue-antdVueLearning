<template>
  <div>
    <h2>shop主要内容</h2>
  </div>
</template>

<script>
export default {
  // 因为在index.js中ShopMain.vue的props为ture,所以这边props可以接收到参数
  props: ['id'],
  mounted () {
    console.log("ShopMain:true---",this.id);
  }
}
</script>

<style>

</style>