<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="changeMsg">改变msg</button>
    <h2>{{ counter }}</h2> <!-- 不需要.value因为模板会自动解析 -->
    <button @click="changeCounter">改变counter</button>
    <h2>{{ obj.name }}</h2>
    <h2>{{ name }}</h2>
    <button @click="changeObjName">改变名字</button>
    <h2>{{ obj.children.name }}</h2>
    <setupContent></setupContent>
  </div>
</template>

<script>
import setupContent from './components/setupContent.vue';
// ref可以使变量响应式地起作用
import { ref, reactive, toRefs } from 'vue'; // 定义变量用ref 定义引用类型用reactive toRefs使结构的数据重新获得响应式
export default {
  data () {
    return {
      message: "helloworld",
    };
  },

  // 组件被创建前执行,不要使用this,this不会指向实例
  setup() {
    // 无响应式
    console.log("setup");
    let msg = "hello";
    function changeMsg() {
      msg = 'nihao'
      console.log(msg); // 发现console更新了但页面没更新,说明数据不是响应式的.
    }

    // 通过ref定义响应式变量
    const counter = ref(0); // ref是一个函数,会返回一个带有value属性的对象
    function changeCounter () {
      counter.value++
    }

    // 定义引用类型用reactive,也是响应式的
    const obj = reactive({
      name: "张三",
      age: 18,
      children: {
        name: "王五"
      }
    })
    function changeObjName () {
      obj.name = "李四"
    }

// ES6解构...obj就不需要再obj.children.name,但会使对象中属性失去响应式
// toRefs(object)使解构后的数据重新获得响应式
 let {name, children} = toRefs(obj);
    return { msg, changeMsg, counter, changeCounter, obj, changeObjName, ...toRefs(obj) }; // children name
  },
  //   beforeCreate () {
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log("created");
  // },



  components: {
    setupContent,
  }
}
</script>

<style>

</style>