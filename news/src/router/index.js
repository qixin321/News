import Vue from 'vue'
import Router from 'vue-router'

// @符号是在webpack项目配置中进行的路径简写
// webpack.base.conf.js 中 resolve/alias项
// import HelloWorld from '@/components/HelloWorld'
import Topic from '@/components/topic/topic'
import TopicDetail from '@/components/topic-detail/topic-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/topic/:type',
      component: Topic
    },
    {
      path: '/topic/detail/:type/:id',
      component: TopicDetail
    },
    {
      path: '/*',
      redirect: '/topic/all'
    }
  ]
})
