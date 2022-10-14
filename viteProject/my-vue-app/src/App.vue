<template>
  <p>{{ message }}</p>
  <button @click="message = '你好'">改变message</button>
  <!-- v-model:数据双向绑定 -->
  <input type="text" v-model="message" />
  <p>{{ user.name }}</p>
  <button @click="user.name = '李BB'">改变名字</button>
</template>

<script>
export default {
  data() {
    return {
      message: "helloworld",
      age: 0,
      user: {
        name: "刘AA",
      }
    };
  },

  methods: {},

  // 监听数据的变化
  watch: {
    // 不需要this
    // 每当message发生变化时,就会调用这个函数
    // 一个数据影响多个数据
    // message:function(newValue, oldValue) {
    //   console.log("newValue", newValue);
    //   console.log("oldValue", oldValue);

    //   // 执行异步操作或者复杂逻辑代码
    //   if (newValue.length < 5 ||newValue.length > 10) {
    //     console.log("输入框中内容长度不能小于5或大于10")
    //   }
    // }

    message: {
      immdeiate: true, // 表示初始化时调用函数
      handler: function (newValue) {
        if (newValue.length < 5 || newValue.length > 10) {
          console.log("输入框中内容长度不能小于5或大于10");
        }
      },
    },

      // watch可以监听数据,但如果数据是一个对象,那么他不能监听到对象的属性的变化,所以需要使用深度监听。
    user:function(newValue) {
      console.log(newValue); // con
    }
  },
};
</script>

<style></style>
