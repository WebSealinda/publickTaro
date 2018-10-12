import Taro, { Component } from '@tarojs/taro'
import {connect} from '@tarojs/redux'

import AccountView from '../../components/Account/Account'
import {createAction} from "../../utils";

@connect(({feeds}) => ({
  list: feeds.list,
}))
export default class Account extends Component {
  config = {
    navigationBarTitleText: '我的'
  }

  componentDidMount = () => {
    this.props.dispatch(createAction("feeds/loadMore"));
  };

  render () {
    return (
      <AccountView />
    )
  }
}

