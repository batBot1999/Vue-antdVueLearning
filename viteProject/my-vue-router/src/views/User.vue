<template>
  <div>User</div>
</template>
<!-- vue2选项式api写法 -->

<!--
<script>
  export default {
    // index.js中User的props设置为true了,不需要this.$route.params.id,直接this.id就可以获取
    props: ['id'],
    mounted () {
      // $route表示活跃的路由对象
      console.log(this.$route.params.id);
      console.log(this.id);
    }
  }
</script>
-->

<!-- vue3组合式api写法 -->

<script setup>
  import { useRoute } from "vue-router";
  console.log(useRoute().params.id);
  const props = defineProps({
    id: String
  })
  console.log(props.id);
</script>
