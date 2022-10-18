<template>
  <h2>我是slotContent组件内容</h2>
  <div>
    <!-- <slot>
    </slot> -->
    <!-- 如果需要多个插槽,就需要具名插槽,给每个插槽起名字 -->
    <!-- 备用内容,没有提供内容时渲染 -->
    <!-- <slot name="button"><button>默认按钮</button></slot>
    <slot name="input"></slot>
    <slot name="h2"></slot> -->
    <slot :list="list" :message="message"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: "abc",
      list: [1,2,3,4],
    }
  }
}
</script>

<style>

</style>