<template>
  <div id="app">
    <!-- 显示组件的内容 -->
      <router-view></router-view>
    <!--列表的导航 -->
    <my-nav></my-nav>
  </div>
</template>

<script>
  // 引入rem的JS文件
  import 'static/js/rem.js'

  // 引入导航条
  import myNav from '@/components/my-nav/my-nav'
  export default {
    components: {
      myNav
    },
    created () {
      console.log(this.$route)
    }
  }
</script>

<style>
  /* 引入CSS文件 */
  @import './assets/css/reset.css';

</style>
