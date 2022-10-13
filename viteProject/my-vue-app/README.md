### 流程
入口文件为:index.html, id:app
又指向了main.js
main.js完成了挂载:
```js
import App from './App.vue'
createApp(App).mount('#app')
```
所以去App.vue再看看
这里就相当于真正的首页,不要把组件放这里,这里要保持简洁,只引入组件
<script type="module" src="/src/main.js"></script>
