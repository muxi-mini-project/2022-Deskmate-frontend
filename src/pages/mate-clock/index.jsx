import { Component } from 'react'
import { View, Text ,Image,Button} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import Success from './images/success.png'
import Desk from './images/desk.png'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClock = () => {
    Taro.reLaunch({
        url:'/pages/chatting/index'
      })
  }

  render () {
    return (
      <View className='container'>
        <View className='clock'>
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
                    <Image src={Success} className='success'></Image>
                </View>
                <View className='main-4'>
                    <View><Text className='line'>今日打卡任务完成</Text></View>
                    <View><Text className='line'>可以进入同桌打卡页查看聊天记录</Text></View>
                </View>
                <View className='main-5'>
                    <Button className='btn' style='width:125px;height:34px;' onClick={this.handleClock}>
                    同桌打卡</Button>
                </View>
            </View>
        </View>
        <View className='desk'><Image src={Desk}></Image></View>
      </View>
    )
  }
}
