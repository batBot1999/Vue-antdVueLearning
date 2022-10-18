<template>
  <div>
    <p
      :style="{
        color: activeColor,
        fontSize: fontSize,
        backgroundColor: bgColor,
      }"
    >
      对象语法1
    </p>
    <!-- <p :style=""></p> -->
    <p :style="styleObj">对象语法2</p>
    <hr>
    <p :style="[styleObj, {border: '5px solid blue'}]">数组语法1</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeColor: "red",
      fontSize: "50px",
      bgColor: "pink",
      styleObj: {
        color: "red",
        fontSize: "50px",
        // "backgroundColor": "pink",
        "background-color": "pink",
      },
    };
  },
};
</script>

<style></style>
