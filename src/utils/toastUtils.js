import Taro from '@tarojs/taro';
import { checkEmpty } from './stringUtils'

/**
 *@param content
 * @param time 消失时间，默认是2秒
 */
export const showToast = (content, time = 2000) => {
  if(checkEmpty(content)){
    return;
  }
  Taro.showToast({
    title: content,
    duration: time,
    icon: 'none'
  })
}
