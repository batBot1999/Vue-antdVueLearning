<template>
  <p>v-model绑定</p>
  <input type="text" v-model="msg">
  <h1>{{ msg }}</h1>
  <!-- v-model原理 -->
  <!--
    本质为两个操作:
      1. v-bind绑定一个value属性
      2. v-on给当前元素添加一个input事件
   -->
  <input type="text" :value="msg" @input="changeValue">
  <hr>
  <p>复选框</p>
  <p>单个勾选框,v-model为布尔值</p>
  <input type="checkbox" v-model="checked">
  <h2>{{ checked }}</h2>
  <br>
  <p>多个勾选框,v-model为数组</p>
  <!-- 如果没有value就没办法正确赋值给v-model -->
  <input type="checkbox" v-model="fruits" value="苹果">苹果
  <input type="checkbox" v-model="fruits" value="香蕉">香蕉
  <input type="checkbox" v-model="fruits" value="荔枝">荔枝
  <input type="checkbox" v-model="fruits" value="西瓜">西瓜
  <h2>喜欢的水果: {{ fruits }}</h2>
  <hr>
  <p>单选框</p>
  <!-- 如果没有value就没办法正确赋值给v-model -->
  <input type="radio" name="" id="" v-model="sex" value="男">男
  <input type="radio" name="" id="" v-model="sex" value="女">女
  <h2>性别: {{ sex }}</h2>
  <hr>
  <p>下拉选项框</p>
  <p>单选</p>
  <select name="" id="" v-model="city">
    <!-- 如果没有value就没办法正确赋值给v-model -->
    <option value="city1">city1</option>
    <option value="city2">city2</option>
    <option value="city3">city3</option>
  </select>
  <h2>选中的城市: {{ city }}</h2>
  <hr>
  <p>多选 ctrl点击鼠标/拖动鼠标</p>
    <select name="" id="" v-model="citys" multiple>
    <!-- 如果没有value就没办法正确赋值给v-model -->
    <option value="city1">city1</option>
    <option value="city2">city2</option>
    <option value="city3">city3</option>
    <option value="city4">city4</option>
    <option value="city5">city5</option>
  </select>
  <h2>选中的城市: {{ citys }}</h2>

</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      msg: "helloworld",
      checked: "",
      fruits: [],
      sex: "男",
      city: "city1",
      citys: "",
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