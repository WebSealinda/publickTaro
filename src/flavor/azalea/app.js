import '@tarojs/async-await'
import Taro, {Component} from '@tarojs/taro'
import {Provider} from '@tarojs/redux'

import { createAction } from './utils/index'
import Index from './containers/Index/index'
import dva from './dva'
import models from './models'
import { setConfig } from './common/config';
import config from './flavor/out/config';
import './app.scss'

setConfig(config)
global.qiniuUrl = config.qiniuUrl

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    dispatch(createAction("sys/error", e));
  },
});
const store = dvaApp.getStore();

class App extends Component {

  config = {
    pages: [
      'containers/Index/index',
      'containers/Account/Account',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0068C4',
      navigationBarTitleText: 'taro知乎',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "containers/Index/index",
        text: "首页",
        iconPath: "./asset/images/index.png",
        selectedIconPath: "./asset/images/index_focus.png"
      },{
          pagePath: "containers/Account/Account",
          text: "我的",
          iconPath: "./asset/images/burger.png",
          selectedIconPath: "./asset/images/burger_focus.png"
        }]
    }
  }

  componentDidMount() {
    dvaApp.dispatch({type: 'sys/test'})
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentCatchError() {
  }

  render() {
    return (<Provider store={store}>
      <Index/>
      </Provider>);
  }
}

Taro.render(<App/>, document.getElementById('app'))
