<template>
  <h1>v-model修饰符作用</h1>
  <p>.lazy 失去焦点时才同步输入框中的数据,也就是change事件之后</p>
  <input type="text" v-model.lazy="msg">
  <p>{{ msg }}</p>
  <hr>
  <p>.number 将输入框的内容转为数值类型</p>
  <input type="text" v-model.number="counter">
  <p>类型:{{ typeof counter }}</p>
  <hr>
  <p>.trim 自动过滤用户输入的首位空白字符(空格)</p>
  <input type="text" v-model.trim="msg" @keydown="downmsg">
  <p>{{ typeof msg }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "hellovue",
      counter: 0,
    }
  },
  methods: {
    downmsg () {
      console.log(this.msg);
    }
  }
}
</script>

<style>

</style>