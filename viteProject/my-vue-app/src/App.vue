<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import BlogPost from "./components/BlogPost.vue";
import AlertBox from "./components/AlertBox.vue";
import { ref } from "vue";

const posts = ref([
  { id: 1, title: "AAA" },
  { id: 2, title: "BBB" },
  { id: 3, title: "CCC" },
]);

const postFontSize = ref(1);
const count = ref(0);
</script>

<template>
  <HelloWorld />
  <hr />
  <!-- 父组件中添加一个postFontSize -->
  <!-- 在模板中用它来控制所有博客文章的字体大小： -->
  <div :style="{ fontSize: postFontSize + 'em' }">
    <!-- 父组件可以通过 v-on 或 @ 来选择性地监听子组件上抛的事件，就像监听原生 DOM 事件那样： -->
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    ></BlogPost>
  </div>
  <hr />
  <button @click="count++">Clicked me {{ count }} times.</button>
  <hr />
  <p>通过插槽slot来分配内容</p>
	<AlertBox>
  	Something bad happened.
	</AlertBox>
  <hr>

</template>

<style scoped></style>
