<template>
  <div>
    <h2>Page页面</h2>
    <button @click="goPage">跳转页面</button>
  </div>
</template>

<script>
export default {
  methods: {
    goPage() {
      // console.log(this.$router); 里边有很多方法:back go forward
      // "/"就是Home页面
      // this.$router.push('/');
      // 传一个对象
      // this.$router.push({path:"/"});
      // 带参数
      // this.$router.push({path:"/user/123456"})
      // 去index.js给路由页面加name,然后通过name访问
      // this.$router.push({name: "news", params: {id: 123456}});
      // this.$router全局的
      this.$router.push({path:"/about", query:{name: "zhangsan"}});
      // replace替换当前位置,作用类似于push 不会给history添加新纪录
      // this.$router.push({ path: "/about", query: { name: "zhangsan" }, replace: true });
      // this.$router.replace({path:"/about", query:{name: "zhangsan"}});

    }
  }
}
</script>

<style>

</style>