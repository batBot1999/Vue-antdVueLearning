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
        age: 18,
        sex: "man"
      },
    };
  },

  methods: {},

  // 侦听数据的变化
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

    // watch可以侦听数据,但如果数据是一个对象,那么他不能侦听到对象的属性的变化,所以需要使用深度侦听deep
    // user: function (newValue) {
    //   // 不会console出任何东西
    //   console.log(newValue);
    // },

    // 深度侦听
    // user: {
    "user.name": { // 使用字符串的形式进行优化,只单独侦听user对象的name属性
      handler: function(newValue) {
        console.log(newValue);
      },
      deep: true, // 表示是否深度侦听,侦听器会一层一层向下遍历,给对象每个属性都加上侦听器,但我们只需要侦听name属性
    }
  },
};
</script>

<style></style>
