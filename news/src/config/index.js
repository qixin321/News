
// 定义请求话题列表时的默认数据
export const topicParams = {
  channel: '头条',
  num: '40',
  start: '0',
  appkey: '2e0549b3e37302458e3b474b8ed1d4b1'
}

const API_PROXY = 'https://bird.ioliu.cn/v1/?url='

// 定义数据请求新闻的的API url地址
export const APIRootUrl = API_PROXY + 'https://way.jd.com/jisuapi/get'
