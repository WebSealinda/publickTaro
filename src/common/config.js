import { configRequest } from 'azalea-web-request';

const globalConfigs = {
  menus: [],
  routes: [],
  logo: '',
  appName: '',
  request: {
    hostName: '',
  },
  qiniuUrl: 'http://p3vm85pao.bkt.clouddn.com/',
  env: 'A',
};

const updateConfig = (parent, key, target) => {
  if (parent[key] instanceof Array && target instanceof Array) { // 如果我们都是数组，一起玩咯
    parent[key] = target; // eslint-disable-line
  } else if (parent[key] instanceof Object && target instanceof Object) { // 如果我们都是对象，那就处对象呗
    // 让我看看你有什么货先
    for (const childKey in target) {
      // 你真的有那就开干
      if (Object.prototype.hasOwnProperty.call(target, childKey)) {
        if (!parent[key][childKey]) {
          // 我没有怎么办？直接吞噬
          parent[key][childKey] = target[childKey]; // eslint-disable-line
        } else {
          // 我也有喔，但可能我有默认值，递归一下
          updateConfig(parent[key], childKey, target[childKey]);
        }
      }
    }
  } else {
    // 什么数字啊，字符串啊，直接来吧
    parent[key] = target; // eslint-disable-line
  }
};

export const setConfig = (configs) => {
  console.info('主项目传入的configs ===>', configs);
  for (const key in configs) {
    if (Object.prototype.hasOwnProperty.call(configs, key)) {
      updateConfig(globalConfigs, key, configs[key]);
    }
  }
  configRequest(globalConfigs.request);

  console.info('全局configs ===>', globalConfigs);
};

export const getConfig = () => globalConfigs;

