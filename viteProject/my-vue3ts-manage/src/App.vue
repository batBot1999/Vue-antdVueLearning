<template>
  <div>
    <!-- 自定义指令,局部注册 -->
    <input type="text" >
    <input type="text" v-focus>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },

  // 自定义指令局部注册,不需要写v-
  directives: {
    focus: {
      inserted: function (el) {
        // 表示被绑定的元素插入父节点时调用
        // el: 指令所绑定的元素
        // binding:对象,属性name:指令名,value:指令绑定值
        el.focus(); // 获取焦点
      },
    },
  },
};
</script>
