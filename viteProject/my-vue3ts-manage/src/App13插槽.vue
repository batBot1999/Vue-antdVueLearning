<template>
  <div>
    <h1>App13插槽</h1>
    <slotContent></slotContent>
    <slotContent><input type="text" />输入框</slotContent>
    <p>如果有多个值,同时放在组件内进行替换,一起作为替换元素</p>
    <slotContent><button>按钮</button><input type="text" />输入框</slotContent>
    <hr />
    <h1>具名插槽</h1>
    <slotContent>
      <!-- v-slot只能在template上 -->
      <!-- 父级模板里的所有内容都是在父级作用域上编译的,子级模板里的所有内容都是在子级作用域上编译的   -->
      <template v-slot:button
        ><button>按钮{{ message }}</button></template
      >
      <template v-slot:input><input type="text" /></template>
      <template v-slot:h2><h2>插槽</h2></template>
    </slotContent>
    <hr />
    <h1>作用域插槽:父组件替换插槽的标签,但是数据由子组件提供</h1>
    <p>无序列表</p>
    <slotContent>
      <template v-slot:default="slotProps">
        {{ slotProps.list }} ---- {{ slotProps.message }}
        <ul>
          <li v-for="item in slotProps.list" :key="item">{{ item }}</li>
        </ul>
      </template>
    </slotContent>
    <hr />
    <p>有序列表</p>
    <slotContent>
      <template v-slot:default="slotProps">
        {{ slotProps.list }} ---- {{ slotProps.message }}
        <ol>
          <li v-for="item in slotProps.list" :key="item">{{ item }}</li>
        </ol>
      </template>
    </slotContent>
  </div>
</template>

<script>
import slotContent from "./components/slotContent.vue";
export default {
  data() {
    return {
      message: "helloworld",
    };
  },
  components: {
    slotContent,
  },
};
</script>

<style></style>
