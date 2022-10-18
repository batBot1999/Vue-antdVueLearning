<template>
  <div>
    <h2>我是setupProps内容</h2>
    <h2>{{ message }}</h2>

  </div>
</template>

<script>
import { onUpdated, toRefs } from "vue";
export default {
  props: {
    message: {
      type: String,
      default: "你好",
    },
  },

  setup(props, context) {
    // console.log(props.message);
    // const { message } = toRefs(props);
    // console.log(message.value);
    // onUpdated(() => {
    //   console.log(message.value);
    // });
    console.log(context);
  },

  data() {
    return {
      a: 10,
    };
  },
};
</script>

<style></style>
