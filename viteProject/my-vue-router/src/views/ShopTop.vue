<template>
  <div>
    <h2>shop头部</h2>
  </div>
</template>

<script>
export default {
  // 因为在index.js中ShopTop.vue的props为false,所以这边props不可以接收到参数
  props: ['id'],
  mounted () {
    console.log("ShopMain:false---",this.id);
  }
}
</script>

<style>

</style>