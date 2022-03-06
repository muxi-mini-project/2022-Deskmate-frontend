import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image,  ScrollView, Button} from '@tarojs/components'
import './index.less'
import backImg from '../../images/backImg2.png'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  tonomate(){
    Taro.navigateBack({
      url:'.../nomate/index'
    })
  }

  toapplyAccepting(){
    Taro.navigateTo({
      url:'/pages/applyAccepting/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='stick'>
        <Button className='back' plain onClick={this.tonomate}>
            <Image src={backImg} className='backImg' />
          </Button>
          <View className='title'>同桌申请</View>
        </View>
        <ScrollView className='items' scrollY enableFlex>
          <View className='item'onClick={this.toapplyAccepting}>
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
          <View className='item'onClick={this.toapplyAccepting}>
            <View className='top'>
              <View className='head'></View>
              <View className='info'>
                <View className='userName'>用户名</View>
                <View className='school'>计算机学院</View>
                <View className='majorGrade'>计算机科学与技术 2020级</View>
              </View>
            </View>
            <View className='tags'>
              <View className='tag1'>六级</View>
              <View className='tag2'>六级</View>
              <View className='tag3'>数据结构</View>
              <View className='tag4'>六级</View>
              <View className='tag5'>计算机组成原理</View>
            </View>
            <View className='motto'>高数好难，求大佬带带</View> 
          </View>
          <View className='item'onClick={this.toapplyAccepting} >
            <View className='top'>
              <View className='head'></View>
              <View className='info'>
                <View className='userName'>用户名</View>
                <View className='school'>计算机学院</View>
                <View className='majorGrade'>计算机科学与技术 2020级</View>
              </View>
            </View>
            <View className='tags'>
              <View className='tag1'>六级</View>
              <View className='tag2'>六级</View>
              <View className='tag3'>数据结构</View>
              <View className='tag4'>六级</View>
              <View className='tag5'>计算机组成原理</View>
            </View>
            <View className='motto'>高数好难，求大佬带带</View>
          </View>
        </ScrollView>
      </View>
    )
  }
}