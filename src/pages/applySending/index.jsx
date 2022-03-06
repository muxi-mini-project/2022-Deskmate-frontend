import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Button,Image } from '@tarojs/components'
import './index.less'
import ques from '../../images/ques.png'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  tosent(){
    Taro.navigateTo({
      url:'/pages/sent/index'
    })
  }

  tosquare(){
    Taro.navigateBack({
      url:'/pages/square/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='item'>
          <View className='top'>
             <View className='head'></View>
             <View className='info'>
              <View className='userName'>用户名</View>
              <View className='school'>计算机学院</View>
              <View className='majorGrade'>计算机科学与技术 2020级</View>
            </View>
          </View>
          <View className='line'></View>
          <View className='tags'>
              <View className='tag1'>六级</View>
              <View className='tag2'>六级</View>
              <View className='tag3'>数据结构</View>
              <View className='tag4'>六级</View>
              <View className='tag5'>计算机组成原理</View>
            </View>
          <View className='motto'>高数好难，求大佬带带</View>
        </View>
        <Image src={ques} className='ques' />
        <View className='texts'>
          <View className='text'>确定向ta发送同桌申请吗？</View>
          <View className='text'>可同时向多个陌生人发送申请</View>
          <View className='text'>最先通过申请的将会结成同桌</View>
        </View>
        <Button className='sure' onClick={this.tosent}>确认</Button>
        <Button className='back' onClick={this.tosquare}>返回</Button> 
      </View>
    )
  }
}