<template>
  <h1>事件处理</h1>
  <p>绑定事件不传参传点击事件</p>
  <button @click="addCounter">{{ counter }}+1</button>
  <p>绑定事件不传参也不传点击事件</p>
  <button @click="addCounter()">{{ counter }}+1</button>
  <p>绑定事件传参</p>
  <button @click="addCounter(5)">{{ counter }} +5</button>
  <p>绑定事件既传递参数又传递点击事件</p>
  <button @click="addCounter(5, $event)">{{ counter }} +5</button>
  <p>一个事件绑定多个处理函数</p>
  <button @click="addCounter(5), addAge()">{{ counter }} +5 --- {{ age }} +1</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      age: 18
    };
  },
  methods: {
    addCounter(param, e) {
      if (param) {
        this.counter += param;
        // 无参时,输出点击事件PointerEvent
        console.log(e);
      } else {
        this.counter++;
        console.log(e);
      }
    },

    addAge () {
      this.age++;
    }
  },
};
</script>

<style></style>
