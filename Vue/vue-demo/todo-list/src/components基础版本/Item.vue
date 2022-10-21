<template>
  <div>
    <li>
      <label>
        <!-- click事件和change事件都可以 -->
        <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)" />
        <!-- v-model也能实现功能,但不推荐,因为修改了props,只不过vue没有监测到 -->
        <!-- <input type="checkbox" v-model="todo.completed" /> -->
        <span>{{ todo.title }}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)" >删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["todo", "checkTodo", "deleteTodo"],
  mounted() {
    // console.log(this.todo);
  },
  methods: {
    // 勾选和取消勾选
    handleCheck(id) {
      // console.log(id);
      // 通知App组件将对应的todo对象的completed值取反
      this.checkTodo(id)
    },
    // 删除
    handleDelete(id) {
      if (confirm("确定删除吗?")) {
        console.log(id);
        // 通知App删除
        this.deleteTodo(id)
      }

    }
  }

};
</script>

<style lang="less" scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
