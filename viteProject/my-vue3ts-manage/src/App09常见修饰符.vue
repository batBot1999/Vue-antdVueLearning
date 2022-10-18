<template>
  <h1>常见修饰符</h1>
  <p>.stop 阻止事件冒泡</p>
  <div @click="divClick" class="father">
    <button @click.stop="btnClick" class="son">BUTTON</button>
  </div>
  <hr>
  <p>.prevent 阻止默认行为</p>
  <form action="">
    <!-- 点击提交会刷新页面,希望自己去提交而不是默认行为 -->
    <input type="submit" value="提交" @click.prevent="submitClick">
  </form>
  <hr>
  <p>.once 只触发一次回调</p>
  <button @click.once="onceClick">只触发一次once</button>
  <hr>
  <p>按键修饰符</p>
  <!-- 根据键盘编码KeyCode或者键盘简写keyAias监听键帽 -->
  <input type="text" @keyup.enter="keyUp">

</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    divClick (){
      console.log("父元素展示");
    },

    btnClick (){
      console.log("子元素展示");
    },

    submitClick(){
      console.log("提交数据成功");
    },

    onceClick() {
      console.log("只会触发一次");
    },

    keyUp () {
      console.log("已按键");
    }
  },
};
</script>

<style>
.father {
  width: 400px;
  height: 400px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}
.son {
  width: 100px;
  height: 100px;
  background-color: blue;
  color: red;
  /* margin: auto; */
}
</style>
