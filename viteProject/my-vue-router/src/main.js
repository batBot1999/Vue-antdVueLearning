import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// 先使用router,否则挂载时无法识别router-link、router-view
app.use(router)
app.mount('#app')
