<template>
  <div>
    <p>lifeContent</p>
    <button @click="counter++">改变counter</button>
    <h2>{{ counter }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
    }
  },
  beforeCreate () {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  destroyed() {
    console.log("destroyed");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  }
}
</script>

<style>

</style>