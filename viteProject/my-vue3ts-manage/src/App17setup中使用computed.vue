<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="changeCounter">改变coutner</button>
    <h2>{{ user.name }}</h2>
    <button @click="changeUserName">改变user的名字</button>
  </div>
</template>

<script>
import { ref, reactive, watch, watchEffect, computed } from "vue"; // watchEffect可以监听到属性
export default {
  data() {
    return {
      message: "helloworld",
    };
  },

  setup() {
    // const counter = ref(0);
    // function changeCounter() {
    //   counter.value++;
    // }
    // // watch(侦听的响应式引用, 回调函数)
    // watch(counter, (newVal, oldVal) => {
    //   console.log("newVal---", newVal);
    //   console.log("oldVal---", oldVal);
    // });

    const msg = ref("helloworld");
    const reverseMsg = computed(() => { // 返回一个带有value属性的对象
      return msg.value.split('').reverse().join('');
    })
    console.log(reverseMsg.value);
    const user = reactive({
      name: "bob",
      age: 18,
      reverseMsg: computed(() => { // 返回一个带有value属性的对象
      return msg.value.split('').reverse().join('');
    })
    });
    // watch(user, (newVal, oldVal) => {
    //   console.log("newVal---", newVal);
    //   console.log("oldVal---", oldVal);
    // });
    // watchEffect(回调函数)不需要指定监听的属性,自动收集依赖
    // watchEffect(() => {
    //   console.log("user.name---", user.name);
    // });
    // function changeUserName() {
    //   user.name = "tom";
    // }
    console.log(user.reverseMsg);

    /*
    watch和watchEffect区别
    1.watchEffect不需要指定监听的属性,自动收集依赖,只要在回调中引用了响应式的属性,只要这些属性发生了改变,回调就会执行,watch只会监听指定的属性.
    */

    return {
      // counter,
      user,
      msg,
      // changeCounter,
      // changeUserName,
    };
  },

  // watch: {
  //   message(newVal, oldVal) {},
  // },
};
</script>

<style></style>
