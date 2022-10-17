<template>
  <div>
    <lifeContent v-if="isShow"/>
    <button @click="isShow = !isShow">销毁组件</button>
  </div>
</template>

<script>
import lifeContent from './components/lifeContent.vue'
export default {
  data () {
    return {
      message: "helloworld",
      isShow: true
    }
  },
  components: {
    lifeContent
  }
}
</script>

<style>

</style>