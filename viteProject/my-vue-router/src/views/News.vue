<template>
  <div>新闻</div>
</template>

<script>
export default {
  data() {
    return {
      age: 18,
    };
  },
  // 组件内路由守卫
  // 直接this.age拿不到实例对象,通过next的回调函数获取
  beforeRouteEnter(to, from, next) {
    console.log("到哪里去---", to);
    console.log("从哪里来---", from);
    // 传递参数,vm是组件实例,名字随便
    next((vm)=>{
      // vm相当于this
      console.log(vm.age);
    })
    console.log("路由组件进入之前---");
  },
  beforeRouteUpdate() {
    console.log("路由组件更新之前---");
  },
  beforeRouteLeave() {
    console.log("路由离开组件之前---");
  },
};
</script>

<style></style>
