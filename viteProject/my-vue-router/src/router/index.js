import {
  createRouter,
  createWebHashHistory,
  // 引入history路由
  createWebHistory
} from 'vue-router';
// 1. 定义路由组件.
// 也可以从其他文件导入

// 静态导入
// import Home from "../views/Home.vue";
import About from "../views/About.vue";
import User from "../views/User.vue";
import NotFound from "../views/NotFound.vue";
import News from "../views/News.vue";
import Parent from "../views/Parent.vue";
import StyleOne from "../views/StyleOne.vue";
import StyleTwo from "../views/StyleTwo.vue";
import Page from "../views/Page.vue";
import ShopTop from "../views/ShopTop.vue";
import ShopMain from "../views/ShopMain.vue";
import ShopFooter from "../views/ShopFooter.vue";
// 路由懒加载就是用到时再加载
// component (和 components) 配置接收一个返回 Promise 组件的函数，Vue Router 只会在第一次进入页面时才会获取这个函数，然后使用缓存数据。
const Home=()=>import('../views/Home.vue');
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
  {
    path: '/',
    // 重定向
    // redirect: '/home'
    // 命名路由
    // redirect:{name: "home"}
    // 方法
    redirect: (to)=> {
      // console.log(to);
      return {path: '/home'}
    }
  },
  {
    path: '/home',
    name: "home",
    component: Home
    // component: () => import('../views/Home.vue');
  },
  // 单独路由守卫,比如未登录情况下进入个人中心
  {
    path: '/about',
    component: About,
    // 每路守卫(路由独享的守卫)
    beforeEnter: (to, from, next) => {
      // console.log("到哪里去---", to);
      // console.log("从哪里来---", from);
      // 正常情况下token在此判断登录条件,正常登录成功,后台会返回一个token
      // 如果不成立就不可以进入
      if (123 == 1234) {
        next()
      }
    }
  },
  // 动态路由
  {
    path: '/user/:id',
    component: User,
    // 当props设置为true时,route.params将被设置为组件的props
    props: true
  },
  {
    // 动态路由的参数一定是数字
    // path: '/news/:id(//d+)',
    // + 多个参数
    // path: '/news/:id+',
    // * 参数是可有可无的,参数可以重复叠加
    // path: '/news/:id*',
    // ? 参数是可有可无的,但是参数不可以重复叠加
    // path: '/news/:id?',
    name: "news", // 加一个名字方便访问
    path: '/News/:id*',
    component: News
  },
  {
    path: '/parent',
    alias: ['/father', '/dad', '/daddy'], // 起别名
    component: Parent,
    children:[
      {
        path: "styleone",
        component: StyleOne
      },
      {
        path: "styletwo",
        component: StyleTwo
      }
    ]
  },
  {
    path: '/page',
    component: Page
  },
  {
    path: '/shop:id',
    components: {
      default: ShopMain,
      // 与`<router-view>`上`name`属性匹配
      ShopTop: ShopTop,
      ShopFooter: ShopFooter,
    },
    // 对于有命名视图的路由,必须为每个命名视图定义props配置,然后去ShopMain里边接受参数
    props: {default: true, ShopTop: false, ShopFooter: false}
  },
  // 404
  // 正则,匹配任意的
  {
    path: '/:path(.*)',
    component: NotFound
  },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现,为了简单起见,我们在这里使用 hash 模式,有#,好处就是刷新页面不发请求,性能开销小
  // history: createWebHashHistory(),
  // history模式,无#,需要后端支持,可能会404
  history:createWebHistory(),
  routes, // `routes: routes` 的缩写
})

// 全局路由守卫,在进入任意页面都会触发
// 第三个参数next是一个函数,相当于通行证,执行完上边才可以
router.beforeEach((to, from, next) => {
  // console.log("到哪里去---", to);
  // console.log("从哪里来---", from);
  next();
})

export default router;