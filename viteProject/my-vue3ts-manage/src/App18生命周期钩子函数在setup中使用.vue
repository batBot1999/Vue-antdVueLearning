<template>
  <div></div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue';
export default {
  data () {
    return {
      message: "helloworld",
    }
  },

  setup () {
    // 函数中有一个参数,参数为回调函数
    onBeforeMount(() => {
      console.log('onBeforeMount---');
    }),
      onMounted(() => {
      console.log('onMounted---');
    })
    return {};
  }
}
</script>

<style>

</style>