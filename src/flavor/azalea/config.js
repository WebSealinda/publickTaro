import Taro from '@tarojs/taro'

export default {
  request: {
    // hostName: 'http://api.51qianlong.cn/app', // 正式
    hostName: 'http://120.79.138.224:9774/app', // 测试
    extraHeaders: async () => { // 每次请求都会把传'Authorization'给请求头
      const token = Taro.getStorageSync('access_token');
      return {
        Authorization: token,
      };
    },
    extraParams: { // 每次请求都会添加companyId
      companyId: '-1',
    },
  },
  appName: 'AzaleaApp',
  qiniuUrl: 'http://p3vm85pao.bkt.clouddn.com/',
  env: 'test',
};
