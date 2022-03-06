import { Component } from 'react'
import { View, Text ,Image,Button} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import Desk from './images/desk.png'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toSquare = () => {
    Taro.navigateTo({
      url:'/pages/square/index'
    })
  }
  toApplys = () => {
    Taro.navigateTo({
      url:'/pages/deskmateApplys/index'
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
                    <Text className='my-detail line'>点击此编辑名片</Text>
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
                    <View><Text className='line one'>当前还没有同桌</Text></View>
                    <View><Text className='line '>快去 【同桌广场】 找一位同桌吧!</Text></View>
                </View>
                
                <View className='main-3'>
                    <Button className='btn' style='width:125px;height:34px;' onClick={this.toSquare}>
                        同桌广场</Button>
                    <Button className='btn last' style='width:125px;height:34px;' onClick={this.toApplys}>
                        收到的同桌申请</Button>
                </View>
            </View>
        </View>
        <View className='desk'><Image src={Desk}></Image></View>
      </View>
    )
  }
}
