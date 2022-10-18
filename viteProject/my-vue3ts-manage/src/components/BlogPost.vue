<script setup>
defineProps(['title'])
// 通过 defineEmits 宏来声明需要抛出的事件：
defineEmits(['enlarge-text'])
</script>

<template>

  <div class="blog-post">
    <h4>{{ title }}</h4>
    <!-- 给 <BlogPost> 组件添加一个按钮： -->
    <!-- 子组件可以通过调用内置的 $emit 方法，通过传入事件名称来抛出一个事件 -->
    <!-- 因为有了 @enlarge-text="postFontSize += 0.1" 的监听，父组件会接收这一事件，从而更新 postFontSize 的值。 -->
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>