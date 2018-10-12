import Taro from '@tarojs/taro'
import { createAction, delay, showToast } from "../utils/index";
import * as test from '../services/test'

export default {
  namespace: 'feeds',
  state: {
    list: [],
    access_token: ''
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
    saveMore(state, {payload: list}) {
      return {...state, list: [...state.list, ...list]};
    },
  },
  effects: {
    * search(_, {all, call, put}) {
      Taro.showLoading({
        title: '搜索中...',
      });
      try {
        let loadPro = yield put(createAction("load"));
        yield call(() => loadPro);
      } finally {
        Taro.hideLoading();
      }
    },
    * load({payload}, {all, call, put}) {
      try {
        let data = yield call(test.url);
        yield call(delay, 2000);//增加延迟测试效果
        yield put(createAction("save", {list: data}))
        Taro.setStorageSync('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjkxMywidGVsZXBob25lIjoiMTU4Mzg0ODEzODAiLCJpYXQiOjE1MzkyMjMyOTd9.3F0iTEEU00URN2YuZQIsucSZg1X7FGS4IW-ly1-Dpoo')
      }catch (error) {
        showToast(error.message)
      }
    },
    * loadMore({payload}, {all, call, put}) {
      try {
        let data = yield call(test.urlToKen);
        yield call(delay, 2000);//增加延迟测试效果
        yield put(createAction("saveMore", data))
      }catch (error) {
        showToast(error.message)
      }
    },
  },
};
