<template>
  <div>
    <h1>v-for数组</h1>
    <p>v-for使用数组,item代表数组中每一个元素,index表示数组元素的下标</p>
    <p>list1 v-for="person in persons" :key="person"</p>
    <ul>
      <li v-for="person in persons" :key="person">{{ person }}</li>
    </ul>
    <p>list2 v-for="(person, index) in persons" :key="index"</p>
    <ul>
      <li v-for="(person, index) in persons" :key="index">
        {{ index }}: {{ person }}
      </li>
    </ul>
    <h1>v-for对象</h1>
    <p>v-for使用对象,item代表对象元素的键值,key代表对象元素的键名</p>
    <p>list1 v-for="item in personsObj" :key="item"</p>
    <ul>
      <li v-for="item in personsObj" :key="item">{{ item }}</li>
    </ul>
    <p>list1 v-for="item in personsObj" :key="item"</p>
    <ul>
      <li v-for="(item, key, index) in personsObj" :key="index">{{ index }} ~ {{ key }}: {{ item }}</li>
    </ul>
    <h1>为什么有key值,虽然不加key也不会报错,也不会影响渲染</h1>
    <p>为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的 key attribute:</p>
    <ul>
      <li v-for="item in persons"><input type="checkbox" name="" id="">{{ item }}/</li>
    </ul>
    <!-- 直接点击增加,没什么问题,但如果多选选中了一个人,然后再点击增加,就会出问题,可以看到vue没有正确的识别哪个被选中了,因为没有key来识别跟踪元素 -->
    <!-- 快速找到节点,减少渲染次数,提高渲染性能 -->
    <button @click="addPerson">增加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: ["Ally", "Bob", "Cathy", "Dan"],
      personsObj: { name: "Ally", age: 18, sex: "girl" },
    };
  },

  methods: {
    addPerson () {
      this.persons.unshift('newGuy');
    }
  }
};
</script>

<style></style>
