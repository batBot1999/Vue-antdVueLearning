<template>
  <div>
    <h1>v-if</h1>
    <p v-if="age > 18">adult</p>
    <p v-else-if="age == 18">正好18</p>
    <p v-else>child</p>
    <hr>
    <h1>template中使用v-if渲染分组</h1>
    <!-- template是不可见的包裹元素,最终渲染时不显示  -->
    <template v-if="age >= 18">
      <p>十八岁以下禁止查看的内容</p>
      <p>十八岁以下禁止查看的内容</p>
      <p>十八岁以下禁止查看的内容</p>
      <p>十八岁以下禁止查看的内容</p>
    </template>
    <template v-else>
      <p>绿色健康纯享版</p>
      <p>绿色健康纯享版</p>
      <p>绿色健康纯享版</p>
      <p>绿色健康纯享版</p>
    </template>
    <h1>v-show</h1>
    <p></p>
    <p v-show="sex == 'man'">man</p>
    <p v-show="sex == 'woman'">woman</p>
    <hr>
    <p>v-show只是简单地切换元素的displayCSS变量,带有v-show的元素始终会被渲染并保留在dom中</p>
    <h2 v-if="isShow">标题内容1 v-if</h2>
    <h2 v-show="!isShow">标题内容2 v-show</h2>
    <!-- 点击这个切换时,去控制台查看元素变化情况,v-show始终都在,只是display:none而已,但v-if为false时,对应元素和子元素都不会被渲染出来,所以是控制dom元素创建和销毁的,性能开销更大的 -->
    <!-- 频繁切换时,用v-show,可以减少性能开销,而如果运行时很少切换,或者一次性渲染就不会再隐藏了,也用v-if -->
    <button @click="isShow = !isShow">改变isShow</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 15,
      sex: "man",
      isShow: true
    }
  }
}
</script>

<style>

</style>