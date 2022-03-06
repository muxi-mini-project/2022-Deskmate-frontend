import { Component } from 'react'
import { View, Text ,Image,Button} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import Desk from './images/desk.png'
import Warning from './images/warning.png'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toClock= () => {
    Taro.navigateTo({
        url:'/pages/chatting/index'
    })
  }

  render () {
    return (
      <View className='container'>
        <View className='noclock'>
            <View className='header'>
                <View className='my'></View>
                <View >
                    <View className='click'></View>
                    <Text className='my-detail line'>点击此进入个人主页</Text>
                </View>
            </View>
            <View className='dash'>
                <View className='dot'></View><View className='dot'></View>
                <View className='dot'></View><View className='dot'></View>
                <View className='dot'></View><View className='dot'></View>
                <View className='dot'></View>
            </View>

            <View className='main'>
                <View className='main-1'>
                    <View className='circle-1'></View>
                    <View className='three'><View className='circle-2'></View>
                    <View className='circle-2'></View><View className='circle-2'></View></View>
                    <View className='circle-1'></View>
                </View>
                <View className='main-2'>
                    <Text className='line one'>已同桌天数:10天</Text>
                </View>
                <View className='main-3'>
                    <Image src={Warning} className='warning'></Image>
                </View>
                <View className='main-4'>
                    <View><Text className='line'>今日尚未完成打卡任务</Text></View>
                    <View><Text className='line'>进入同桌打卡页</Text></View>
                    <View><Text className='line'>分享今日收获完成打卡</Text></View>
                </View>
                <View className='main-5'>
                    <Button className='btn' style='width:125px;height:34px;' onClick={this.toClock}>
                        同桌打卡</Button>
                </View>
            </View>
        </View>
        <View className='desk'><Image src={Desk}></Image></View>
      </View>
    )
  }
}
