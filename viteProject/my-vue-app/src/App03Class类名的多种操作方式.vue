<template>
<!-- class与style绑定 -->
  <div>
    <h1>对象语法</h1>
    <!-- :class="{ 类名: boolean }" -->
    <p :class="{ active: isActive }">对象语法1</p>
    <p :class="{ active: isActive, helloWorld: isActive }">对象语法2</p>
    <p :class="classObj">hello3</p>
    <button @click="isActive = !isActive">改变active</button>
    <p :class="{ active: isActive, helloWorld: isActive }" class="helloWorld">如果本身有:class绑定style,添加新的class不会覆盖,而是合并,所以和普通的类选择器不会有冲突</p>
    <p :class="chassObjCom">使用computed</p>
    <hr>
    <h1>数组语法 不常用</h1>
    <p :class="[message, activeClass]">数组语法1</p>
    <p :class="[message, { active: isActive }]">数组语法和对象语法结合使用2</p>


  </div>
</template>

<script>
export default {
  data () {
    return {
      message: "helloWorld",
      isActive: true,
      // error: null,
      error: 10,
      classObj: {
        active: true,
        helloWorld: true
      },
      activeClass: "active",
    }
  },

  computed: {
    chassObjCom: function () {
      return {
        active: this.siActive && !this.error, // 都为true才能把active添加进来
        helloWorld: this.error
      }
    }
  }
}
</script>

<style>
  .active {
    font-size: 30px;
    color: blue;
  }

  .helloWorld {
    background-color: pink;
  }
</style>