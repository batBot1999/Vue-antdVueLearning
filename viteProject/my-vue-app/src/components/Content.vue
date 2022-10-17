<template>
    <h2>{{ msg }}</h2>
    <h2>我是Content组件</h2>
    <!-- <p>组件使带有名称的可复用的实例</p> -->
    <!-- <button @click="msg='你好'">改变msg</button> -->
    <Hello :message='msg' counter='123' :list='list' ref="hello"></Hello>
    <p ref="p"></p>
    <button @click="sendParent">提交数据给父组件</button>
    <!-- 父组件访问子组件 $refs,给元素或子组件注册引用信息 -->
    <!-- 子组件访问父组件 $parent,实际开发尽量少用,因为组件的复用性很高,有时并不能准确判断组件的parent是谁 -->
    <!-- 子组件访问根组件 $root -->

</template>

<script>
// 如果用一个对象来存储,那所有组件共用这个数据,指向同一块内存
// const obj = {
//   msg: "helloword",
// }
import Hello from './Hello.vue';
export default {
  // 组件的data必须是一个函数,而且返回了一个新的对象,不会造成数据污染
  data () {
    return {
      msg: "helloword",
    // return obj
    list: [1,2,3,4],
    }
  },
  methods: {
    // 自定义事件
    // 子组件中,通过$emit来触发事件
    sendParent () {
      // this.$emit('自定义事件的名称', '发送的事件参数');
      this.$emit('injectMsg', this.msg);
    }
  },
  mounted () {
    // 读取子元素的a
    console.log(this.$refs.hello.a);
    console.log(this.$root);
  },
  components: {
    Hello
  },

}
</script>

<style>

</style>