<template>
  <p>v-model绑定</p>
  <input type="text" v-model="msg">
  <h1>{{ msg }}</h1>
  <!-- v-model原理 -->
  <!--
    本质为两个操作:
      1. v-bind绑定一个value属性
      2. v-on给当前元素添加一个input事件
      3.
   -->
  <input type="text" :value="msg" @input="changeValue">
  <hr>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      msg: "helloworld"
    }
  },
  methods: {
    changeValue(e) {
      console.log(e);
      this.msg = e.target.value;
    }
  }
}
</script>

<style>

</style>