<template>
  <div>我是Hello组件</div>
  <h2>{{ message }}</h2>
  <!-- <h2>{{ counter }}</h2> -->
</template>

<script>
export default {
  data () {
    return {
      a: 10,
    }
  },
  // 字符串数组
  // props: ['message', 'counter'],
  props: {
    // 1.类型的限制
    // message: String,
    // 2.除了类型限制,还可以设置默认值
    message: {
      type: String,
      default: "你好",
      required: true, // 一定要传值
    },
    list: { // 对象或数组的默认值必须从一个工厂函数返回
      type: Array,
      default() {
        return[]
      }
    },

  }

}
</script>

<style>

</style>