### 流程
首页:index.html, id:app
又指向了main.js
main.js完成了挂载:
```js
import App from './App.vue'
createApp(App).mount('#app')
```
所以去App.vue再看看
App.vue是根组件,就相当于入口文件,不要把组件直接写在这里,这里要保持简洁,只引入组件
<script type="module" src="/src/main.js"></script>
