import Taro, { Component } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'

import { getFileUrl } from '../../services/cloud-storage'
import './index.scss'

export default class Index extends Component{
  render() {
    const { list } = this.props
    return(
      <View>
        <Text>首页测试</Text>
        {list.length>0 && list.map(item => (
          <View className='item-content'>
            <View className='item-img'>
              <Image src={getFileUrl(item.channel.logo)} />
            </View>
            <View className='item-info'>
              <Text className='itemText1'>dsd</Text>
              <Text className='itemText2'>dsd</Text>
              <Text className='itemText3'>dsd</Text>
            </View>
          </View>
        ))}
      </View>
    )
  }
}
