<template>
  <div>About</div>
  <button @click="goBack">后退</button>
</template>
<script>
export default {
  mounted () {
    // this.$route当前的
    console.log(this.$route.query.name);
  },
  methods: {
    goBack(){
      // 前进1步:1 后退一步:-1 不仅可以为1,2也可以,但1和-1最常用
      this.$router.go(-1);
      // 相当于this.$router.go(-1),不可以传参
      // this.$router.back();
      // 相当于this.$router.go(1)
      // this.router.forward();
    }
  }
}
</script>

<style>

</style>