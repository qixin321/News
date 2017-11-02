<template>
	<div class="container">
  	  <div class="wrap" v-for="(item, index) in topicList">
          <div class="content" v-if="item.pic === ''">
            <router-link id="routerlinka" :to="'/topic/detail/' +item.category + '/' + index"> {{ item.title }} </router-link>
            <p>
              <span> {{ item.src }} </span>
              <span> {{ item.time }} </span>
            </p>
          </div>
          <div class="contentpic" v-else>
            <div class="left">
              <router-link id="routerlinka" :to="'/topic/detail/' +item.category + '/' + index"> {{ item.title }} </router-link>
              <p>
                <span> {{ item.src }} </span>
                <span> {{ item.time }} </span>
              </p>
            </div>
            <div class="right">
               <img :src="item.pic" alt="">
            </div>
          </div>
      </div>
  	  <div class="load" v-show="!topicList.length">
         <span>加载中...</span>
      </div>
	  <!-- 该位置有一个loading组件 -->
	  <router-view></router-view>
	</div> 
</template>
<script>
  // 引入请求数据的方法
  import { getTopicList } from '@/common/js/getData'

  export default {
    data () {
      return {
        topicList: []
      }
    },
    // 该位置created只实例化一遍
    created () {
      this._getTopicList()
    },
    methods: {
      _getTopicList () {
        // 定义参数
        let paramstype
        switch (this.$route.params.type) {
          case 'all':
            paramstype = '头条'
            break
          case 'hot':
            paramstype = '财经'
            break
          case 'tech':
            paramstype = '科技'
            break
          case 'aff':
            paramstype = '军事'
            break
          case 'yl':
            paramstype = '娱乐'
            break
          case 'teach':
            paramstype = '教育'
            break
        }
        let params = {
          channel: paramstype
        }
        console.log(params)
        getTopicList(params).then((res) => {
          if (res.status === 200 && res.data.result.result.list.length) {
            console.log(res.data.result.result.list)
            this.topicList = res.data.result.result.list
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    watch: {
      // 检测路由信息的变化，重新发送请求
      $route: function () {
        console.log(this.$route)
        this._getTopicList()
        this.topicList = []
      }
    }
  }
</script>
<style></style>