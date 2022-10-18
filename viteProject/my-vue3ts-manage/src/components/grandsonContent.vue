<template>
  <!-- <h2>grandsonContent--{{ obj.message }}</h2> -->
  <h2>grandsonContent--{{ message() }}</h2>
</template>

<script>
export default {
  data () {
    return {};
  },
  computed: {
    newMsg () {
      return this.message
    }
  },
  inject: ['message'],
  // inject: ["obj"],
}
</script>

<style>

</style>