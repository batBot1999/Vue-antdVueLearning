<template>
  <div>
    <h2>父组件Parent</h2>
    <router-link to="/parent/styleone">样式一</router-link>
    <router-link to="/parent/styletwo">样式二</router-link>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
