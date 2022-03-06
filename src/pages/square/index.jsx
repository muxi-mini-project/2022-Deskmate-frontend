import Taro from '@tarojs/taro'
import  { Component } from 'react'
import { View, Image, Input, ScrollView,Button} from '@tarojs/components'
import './index.less'
import backImg from '../../images/backImg2.png'
import searchImg from '../../images/search.png'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  toapplySending(){
    Taro.navigateTo({
      url:'/pages/applySending/index'
    })
  }

  tonomate(){
    Taro.navigateBack({
      url:'.../nomate/index'
    })
  }

  render () {
    return (
      <View className='index'>
        
        <Button className='back'  plain  onClick={this.tonomate} >
          <Image src={backImg} className='backImg' />
        </Button>
        <View className='search'>
          <Image src={searchImg} className='searchImg' />
        </View>
        <Input  className='input' 
          placeholder='搜索tag' placeholder-style='color:#FFFFFF'
        ></Input>
        <ScrollView className='items'   scrollY   scrollWithAnimatio enableBackToTop >
          <View className='item'  onClick={this.toapplySending}>
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
          <View className='item'  onClick={this.toapplySending}  >
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
          <View className='item'  onClick={this.toapplySending}  >
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
        </ScrollView>
        {/* 搜索tag  */}
        <View className='hotlist'>
          <View className='hot'>热门搜索tag</View>
          <View className='hotlistItem'>四六级</View>
          <View className='devide'></View>
          <View className='hotlistItem'>考研英语</View>
          <View className='devide'></View>
          <View className='hotlistItem'>高等数学</View>
          <View className='devide'></View>
          <View className='hotlistItem'>线性代数</View>
          <View className='devide'></View>
          <View className='hotlistItem'>教资</View>
          <View className='devide'></View>
          <View className='hotlistItem'>考研数学</View>
          <View className='devide'></View>
        </View>
      </View>
    )
  }
}