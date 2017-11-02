import axios from 'axios'
import { topicParams, APIRootUrl } from '@/config/index'

// 请求话题列表
export function getTopicList (params) {
  let path = APIRootUrl
  // 关于默认参数的配置
  // Object.assign() 组合对象，从前到后，相同属性覆盖，不同属性继承
  let paramsData = Object.assign({}, topicParams, params)
  // console.log(paramsData)
  return axios.get(path, {
    params: paramsData
  })
}

export function getTopicDetail (params) {
  let path = APIRootUrl
  // 关于默认参数的配置
  // Object.assign() 组合对象，从前到后，相同属性覆盖，不同属性继承
  let paramsData = Object.assign({}, topicParams, params)
  // console.log(paramsData)
  return axios.get(path, {
    params: paramsData
  })
}
