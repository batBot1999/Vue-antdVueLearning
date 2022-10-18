<!-- VUE2写法,没有setup -->
<script>
// 声明式渲染
// 导出后可以在模板使用
export default {
  // 组件的data是一个函数,返回一个对象.
  data() {
    return {
      num: 0,
      uname: "abcdefg",
      onceNum: 1,
      msg: "<h2>标题</h2>",
      id: "d1",
      // url: "./assets/img/qq.jpg"
      url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1660117297.65076315.png",
      attributeName: "id",
      mouseEvent: "click",
      message: "abcdefg",
    };
  },

  // vue实例定义方法
  // methods中应该尽量避免使用箭头函数,这会阻止vue绑定恰当的this指向.
  methods: {
    changeOnceNum() {
      // this指向vue实例
      this.onceNum += 1;
    },

    changeColor() {
      this.id = "d2";
    },

    methodsReversedMessage() {
      console.log("执行methodsReversedMessage方法");
      return this.message.split("").reverse().join("");
    },
  },

  // 模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。
  // 使用计算属性来描述依赖响应式状态的复杂逻辑。
  // 只要依赖值不变就不会重新计算。
  computed: {
    // computedReversedMessage() {
    //   // 简写
    //   console.log("执行computedReversedMessage计算属性");
    //   return this.message.split("").reverse().join("");
    // },

    // 真实面貌每一个计算属性都有一个getter和setter
    computedReversedMessage:{
      // 全写
      // 计算属性一般没有set方法,计算属性是一个只读属性
      // 设置或更改计算属性时才会调用,有一个参数newValue
      set:function(newValue) {
        console.log(newValue);
        this.message = newValue;
      },

      // 调用计算属性就会执行
      get:function() {
      console.log("执行computedReversedMessage计算属性");
      return this.message.split("").reverse().join("");

      }
    }
  },

  // 监听数据的变化
  watch: {

  }
};
</script>

<template>
  <!--组件实例的所有property,无论如何定义，变量还是方法,都可以在模板template中使用-->
  <div>
    <p>模板语法</p>
    <span>num:{{ num }}</span>
    <br />
    <span>{{ onceNum }}</span>
    <!-- 当数据改变时,插值处的内容不会更新 -->
    <p>v-once数据改变时,插值处内容不会更新</p>
    <span v-once>{{ onceNum }}</span>
    <button @click="changeOnceNum">+</button>
    <hr />
    <p>无v-html</p>
    <p>{{ msg }}</p>
    <!-- v-html输出真正的html -->
    <p>有v-html</p>
    <p v-html="msg"></p>
    <hr />
    <p>atrribute v-bind: 动态绑定属性的内容</p>
    <p v-bind:id="id">v-bind</p>
    <button @click="changeColor">写进方法里去改变为绿色</button>
    <button @click="id = 'd2'">写进js表达式中去改变为绿色</button>
    <p>因为id默认值为"d1"红色,所以点击上边按钮,下方拼接出来的id也会发生改变</p>
    <p v-bind:id="'blue-' + id">写进js表达式中去改变为蓝色或橙色</p>
    <!-- 希望地址src属性是动态的 -->
    <br />
    <img v-bind:src="url" alt="" style="width: 200px" />
    <hr />
    <p>使用js表达式也可以用于模板字符串</p>
    <p>num+1:{{ num + 1 }}</p>
    <p>{{ uname.split("").reverse().join("") }}</p>
    <!--split('')分割成数组然后reverse()翻转然后join('')合并成新的字符串-->
    <p>注意是单个表达式而不是语句</p>
    <hr />
    <h1>v-bind动态参数</h1>
    <p>v-bind动态属性</p>
    <p v-bind:[attributeName]="id">v-bind绑定</p>
    <button @click="attributeName = 'class'">
      动态属性改变id选择器为class选择器
    </button>
    <p>v-bind动态事件</p>
    <button @[mouseEvent]="attributeName = 'class'">
      动态事件改变属性:改变id选择器为class选择器
    </button>
    <br />
    <button @click="mouseEvent = 'mouseover'">
      动态事件改变事件:点击此按钮把click事件变为mouseover,然后鼠标移动到上一个按钮就可以触发
    </button>
    <hr />
    <p>计算属性和侦听属性</p>
    <p>{{ message }}</p>
    <p>js表达式 总共计算三次</p>
    <p>{{ message.split("").reverse().join("") }}</p>
    <p>{{ message.split("").reverse().join("") }}</p>
    <p>{{ message.split("").reverse().join("") }}</p>
    <p>计算属性computedReversedMessage 直接当成属性 计算属性如果依赖值没有变化,就可以缓存,只需要执行一次,提高性能(基于响应依赖关系缓存)</p>
    <p>{{ computedReversedMessage }}</p>
    <p>{{ computedReversedMessage }}</p>
    <p>{{ computedReversedMessage }}</p>
    <p>方法methodsReversedMessage 方法需要调用</p>
    <p>{{ methodsReversedMessage() }}</p>
    <p>{{ methodsReversedMessage() }}</p>
    <p>{{ methodsReversedMessage() }}</p>
    <button @click="message='balabalabala'">改变message</button>
    <br>
    <button @click="computedReversedMessage = 'hello'">改变message</button>
    <hr>
    <p>watch</p>

  </div>
</template>

<style scoped>
#d1 {
  color: red;
}

#d2 {
  color: green;
}

#blue-d1 {
  color: blue;
}

#blue-d2 {
  color: orange;
}
.d1 {
  font-size: 50px;
  color: yellow;
}
</style>
