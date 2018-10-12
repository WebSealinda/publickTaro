import Taro, {Component} from '@tarojs/taro'
import {connect} from '@tarojs/redux'

import IndexView from '../../components/Index/index'
import { createAction } from '../../utils/index'

@connect(({feeds}) => ({
  list: feeds.list,
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  };

  constructor() {
    super(...arguments);
  }

  componentDidMount = () => {
    this.props.dispatch(createAction("feeds/load"));
  };

  render() {
    const { list } = this.props
    return (
      <IndexView list={list} />
    )
  }
}

