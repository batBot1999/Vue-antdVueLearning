<template>
  <h1>我是App组件</h1>
  <!-- 拿到子组件Content的数据,通过自定义事件 -->
  <!-- 在父组件中,通过v-on监听子组件的自定义事件 -->
  <Content @injectMsg="getChildMsg"></Content>
  <h2>{{ message }}</h2>
</template>

<script>
import Content from './components/Content.vue';
export default {
  data () {
    return {
      message: ""
    }
  },
  methods: {
    // value就是子组件传过来的值
    getChildMsg (value) {
      console.log(value);
      this.message = value;
    }
  },
  components: {
    Content,
  }
}
</script>

<style>

</style>