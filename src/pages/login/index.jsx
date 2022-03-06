import { Component } from 'react'
import { View, Text,Image,Button,Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.css'
import Login from './images/login.png'
// import Service from '../../commen/service'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleLogin = () => {
    Taro.redirectTo({
        url: '/pages/mine/index'
      })
  }
  toFind = () => {
    Taro.login({
        success: function (res) {
          if (res.code) {
            //发起网络请求
            Taro.request({
              url: 'https://pass.hust.edu.cn/cas/login',
              data: {
                code: res.code
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
  }

  render () {
    return (
    <View className='container'>
        <View className='img-login'><Image src={Login}></Image></View>
        <View className='login'>
            <View className='header'>
                <Text>请输入您的用户名和密码</Text>
            </View>
            <View className='main'>
                <View className='username'>
                    <Text>用户名:</Text>
                    <Input type='number' className='put'  ></Input>
                </View>
                <View className='password'>
                    <Text>密码:</Text>
                    <Input password className='put'></Input>
                </View>
                <Text className='please'>请输入信息门户账号与密码</Text>
            </View>
            <View className='footer'>
            <Button className='btn' style='width:110px' onClick={this.toFind}>忘记密码</Button>    
            <Button className='btn' style='width:110px' onClick={this.handleLogin}>登录</Button>
            </View>
        </View>
    </View>
    )
  }
}
