<template>
  <div>
    <setupProps :message="message"/>
    <button @click="message='你好'">改变message</button>
  </div>
</template>

<script>
import setupProps from "./components/setupProps.vue";
export default {
  data () {
    return {
      message: "helloworld",
    }
  },

  setup () {
    return {};
  },

  components: {
    setupProps,
  }
}
</script>

<style>

</style>