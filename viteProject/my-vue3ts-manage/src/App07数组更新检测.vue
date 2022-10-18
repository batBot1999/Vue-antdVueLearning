<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <button @click="changeList">改变数组</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 3, 6, 4, 5],
    };
  },

  methods: {
    changeList () {
      // 通过索引值修改数组,vue2不行,vue3因为有proxy实现了彻底的响应式
      // this.list[5] = 7;

      // push() 数组末尾添加元素
      // push的源码传递参数:"...item",所以可以push进多个元素
      // this.list.push(7, 8, 9);

      // pop() 删除掉数组最末尾的元素
      // this.list.pop();

      // shift() 删除掉数组首位的元素
      // this.list.shift();

      // unshift() 给数组首位添加元素
      // 传参同push,所以可以unshift进多个元素
      // this.list.unshift(1, 2, 3);

      // splice() 功能强大 删除插入替换
      // 第一个参数代表开始插入或删除的元素的位置的下标
      // 删除
      // 第二个参数是删除元素的个数,如果不传,就会删除掉后边所有元素
      // this.list.splice(1) 从下标为1的元素开始,包含这个元素全删了
      // this.list.splice(1,1) 从下标为1的元素开始,删除一个
      // 插入
      // 第二个参数传0时,就是不删除元素,而是插入元素
      // this.list.splice(1,0,7,8,9); 在下标为1的位置开始插入789三个元素
      // 替换
      // 第二个参数代表要替换几个元素,其实本质上就是删了几个,然后加进来新的
      // this.list.splice(1,3,7,8,9);

      // sort() 排序 默认从小到大
      // this.list.sort();

      //  reverse() 翻转
      // this.list.reverse();



    }
  }
}
</script>

<style>

</style>