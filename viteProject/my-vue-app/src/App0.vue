<!-- VUE3写法 有setup 组合式api -->
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import BlogPost from "./components/BlogPost.vue";
import AlertBox from "./components/AlertBox.vue";
import Home from "./components/tab/Home.vue";
import Posts from "./components/tab/Posts.vue";
import Archive from "./components/tab/Archive.vue";
import { ref } from "vue";

// 声明式渲染
// 导出后可以在模板使用
export default {
  data () {
    return {
      num: 0,
      uname: "TOM"
    }
  }
}

// 初始化
const currentTab = ref('Home')
const postFontSize = ref(1);
const count = ref(0);

const tabs = {
  Home,
  Posts,
  Archive
}

const posts = ref([
  { id: 1, title: "AAA" },
  { id: 2, title: "BBB" },
  { id: 3, title: "CCC" },
]);

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

  <p>tab点击切换</p>
  <div class="demo">
    <button
       v-for="(_, tab) in tabs"
       :key="tab"
       :class="['tab-button', { active: currentTab === tab }]"
       @click="currentTab = tab"
     >
      {{ tab }}
    </button>
    <!-- 被传给 :is 的值可以是以下几种：被注册的组件名 导入的组件对象 -->
	  <component :is="tabs[currentTab]" class="tab"></component>
  </div>
  <hr>


</template>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
