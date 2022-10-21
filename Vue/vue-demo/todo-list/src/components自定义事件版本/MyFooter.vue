<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- 如果已完成数量和全部数量相等,说明所有选项都被选中了 -->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->

      <!-- 初始化没问题,但交互不行,isAll是一个计算属性,简写的话要求是只读取不修改,但v-model双向绑定,修改的话就会有问题,所以要写完整版gettersetter -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ completedTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  // props: ["todos", "checkAllTodo", "clearAllTodo"],
  props: ["todos"],
  computed: {
    total() {
      return this.todos.length;
    },
    completedTotal() {
      // 笨比计数器
      // let i = 0;
      // this.todos.forEach((todo) => {
      //   if(todo.completed) i++;
      // })
      // return i;

      // fashion reduce
      return this.todos.reduce(
        (pre, current) => pre + (current.completed ? 1 : 0),
        0
      );
    },

    // isAll () {
    //   return this.completedTotal === this.total && this.total > 0;
    // }

    isAll: {
      get() {
        return this.completedTotal === this.total && this.total > 0;
      },
      set(value) {
        // this.checkAllTodo(value);
        this.$emit("checkAllTodo", value);
      },
    },
  },

  methods: {
    // 如果用v-model实现就不需要checkAll了
    // checkAll(e) {
    //   this.checkAllTodo(e.target.checked);
    // },

    clearAll() {
      // this.clearAllTodo();
      this.$emit("clearAllTodo");
    }
  },
};
</script>

<style lang="less" scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
