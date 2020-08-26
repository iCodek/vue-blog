import Vue from 'vue'
import Router from 'vue-router'

const MainContent = (resolve) => {
  import('cpnts/main-content/main-content').then((module) => {
    resolve(module)
  })
}
const MdView = (resolve) => {
  import('cpnts/md-view/md-view').then((module) => {
    resolve(module)
  })
}
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'MainContent',
      component: MainContent
    },
    {
      path: '/',
      name: 'MdView',
      component: MdView
    }
  ]
})
