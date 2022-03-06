/* eslint-disable no-undef */
import { Component } from 'react'
import { View ,Input,Text,Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import Picture from './images/picture.png'
import Back from './images/back.png'


export default class Index extends Component {
  constructor(){
    super(...arguments);
      this.state = {
        a: false,
        msg: "",
      }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  backTo= () => {
    Taro.navigateTo({
      //最后还需根据是否打卡判断跳转到哪个页面
      url:'/pages/mate-clock/index'
      
    })
  }
 
  change1(){
    const {a} = this.state
    if(a == false){
        this.setState({
            a: true
          })
    }
    else{
        this.setState({
            a: false
          })
    }
  }
  handleOver = () => {
    Taro.showModal({
      title: '确定要终止同桌吗？',
      content: '同桌之交来之不易，请同学慎重考虑！',
      confirmColor: '#eb7886',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          Taro.reLaunch({
            url:'/pages/deskmate-over/index'
            
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }

  function(){
    Taro.startPullDownRefresh();
  }

  chooseImg= () => {
    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: 'album', 
     
    })
  }

  render () {
    // const { a } = this.state
    return (
      <View className='container'>
        <View className='header'>
          <View className='back' onClick={this.backTo}><Image src={Back}></Image></View>
          <View className='title'>
            <View className='nickname'>昵 称</View>
            <View className='day'>已同桌天数 : 10天</View>
          </View>
          <View className='more' onClick={this.change1.bind(this)}>更多</View>
        </View>
        {this.state.a && <View className='dropdown'>
          <View className='option seecard'>查看同桌名片</View>
          <View className='option over' onClick={this.handleOver}>终止同桌</View>
        </View>}
        {!this.state.a && <View></View>}
        <View className='user-1'>
          <View className='time'>2021年12月30日22:32</View>
          <View className='main-1'>
            <View className='portrait one'></View>
            <View className='content'>
              <View><Text className='word'>今日学习汇报:</Text></View>
              <View className='message'>
                <View className='littlecircle'></View>
                <Text className='word small'> 高数: ......</Text>
              </View>
              <View  className='message'>
                <View className='littlecircle'></View>
                <Text className='word small'>线代: .......</Text>
              </View>
            </View>
          </View>
        </View>
        <View className='user-2'>
        <View className='time'>2021年12月30日22:32</View>
          <View className='main-2'>
            <View className='portrait two'></View>
            <View className='content'>
            <View><Text className='word'>今日学习汇报:</Text></View>
              <View  className='message'>
                <View className='littlecircle'></View>
                <Text className='word small'>高数:......</Text>
              </View>
              <View className='message'>
                <View className='littlecircle'></View>
                <Text className='word small'>线代:.......</Text>
              </View>
            </View>
          </View>
        </View>
        <View className='user-1'>
        <View className='time'>2021年12月30日22:32</View>
          <View className='main-1'>
            <View className='portrait one'></View>
            <View className='content'>
            <View><Text className='word'>今日学习汇报:</Text></View>
              <View className='message'>
                <View className='littlecircle'></View>
                <Text className='word small'>高数:......</Text>
              </View>
              <View className='message'>
                <View className='littlecircle'></View>
                <Text className='word small'>线代:.......</Text>
              </View>
            </View>
          </View>
        </View>
        <View className='footer'>
          <View><Input className='put' value={this.state.msg} onInput={(e) => {console.log(e.target.value);this.setState({msg: e.target.value})}}></Input></View>
          <View className='picture'onClick={this.chooseImg}><Image src={Picture}></Image></View>
        </View>
      </View>
    )
  }
}
