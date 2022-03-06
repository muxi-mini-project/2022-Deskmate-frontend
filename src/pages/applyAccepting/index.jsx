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

  toaccepted(){
    Taro.navigateTo({
      url:'/pages/accepted/index'
    })
  }

  todeskmateApplys(){
    Taro.navigateBack({
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
          <View className='text'>确认与ta结成同桌吗？</View>
          <View className='text'>接受同桌申请后</View>
          <View className='text'>将会撤回已发出和收到的同桌申请</View>
        </View>
        <Button className='sure' onClick={this.toaccepted}>确认</Button>
        <Button className='back' onClick={this.todeskmateApplys}>返回</Button>
      </View>
    )
  }
}