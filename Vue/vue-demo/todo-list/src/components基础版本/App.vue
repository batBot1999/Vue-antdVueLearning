<template>
  <!-- <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div> -->
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <MyFooter
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import List from "./components/List.vue";

export default {
  components: {
    MyHeader,
    MyFooter,
    List,
  },
  data() {
    return {
      // todos: [
      //   { id: "001", title: "吃饭", completed: false },
      //   { id: "002", title: "睡觉", completed: false },
      //   { id: "003", title: "学习", completed: false },
      // ],
      todos: JSON.parse(localStorage.getItem("todos")) || [], // 防止传null,然后报错
    };
  },

  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      // console.log("我是App组件,我接收到了数据:", todoObj);
      this.todos.unshift(todoObj);
    },

    // 勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        // 如果当前遍历todo的id和传进来的id是一样的,就是要找的那个todo
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });
    },

    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    // 全选or取消全选
    checkAllTodo(completed) {
      this.todos.forEach((todo) => {
        todo.completed = completed;
      });
    },

    // 清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.completed;
      });
    },
  },

  watch: {
    // 侦听todos,一旦变化就存进todos
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style lang="less">
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
