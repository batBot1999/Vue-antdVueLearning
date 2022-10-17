<template>
  <h1>App14组件跨层级通信 Provide/Inject</h1>
  <fatherContent/>
  <!-- <button @click="obj.message='你好'">改变App.vue的message</button> -->
  <button @click="message='你好'">改变App.vue的message</button>
  <p>App.vue--{{ obj.message }}</p>
</template>

<script>
import fatherContent from "./components/fatherContent.vue";
export default {
  data() {
    return {
      message: "HelloWorld",
      // 类似于浅拷贝,指向同一块内存空间
      obj: {
        message: "HelloWorld"
      }
    };
  },
  // provide: { message: "HelloWorld" },
  // 如果想访问组件实例的属性,传返回对象的函数
  // propvide/inject不是响应式的,两种方式实现响应式
  provide () {
    return {
      // message: this.message
      obj: this.obj, // 1.响应式对象
      message:() => this.message // 2.函数返回响应式数据
    }
  },
  components: {
    fatherContent,
  },
};
</script>

<style></style>
