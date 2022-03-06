import Taro from '@tarojs/taro'
import  { Component } from 'react'
import { View,  Image,Button, Input} from '@tarojs/components'
import './index.less'
import backjpg from '../../images/backImg.png'
import colorBall from '../../images/colorBalls.png'
import goTo from '../../images/goTo.png'

export default class Index extends Component {

    constructor(){
        super(...arguments);
          this.state = {
            // eslint-disable-next-line react/no-unused-state
            headChangeCon: false, nameChangrCon: false, mottoChangrCon: false,
            tag1:'高等数学',
            tag2:'六级',
            tag3:'线性代数',
            tag4:'计算机组成原理',
            tag5:'四级',
            motto:'同桌宣言',
            tempFilePaths:'../../images/backImg.png'
          }
      }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { } 

  componentDidHide () { }

  

  tonomate(){
    Taro.reLaunch({
      url:'/pages/nomate/index'
    })
  }

  toLogin(){
    Taro.reLaunch({
        url:'/pages/login/index'
    })
  }

  change1(){
    const {headChangeCon} = this.state
    if(headChangeCon == false){
        this.setState({
            headChangeCon: true
          })
    }
    else{
        this.setState({
            headChangeCon: false
          })
    }
  }

  change2(){
    const {nameChangeCon} = this.state
    if(nameChangeCon == false){
        this.setState({
            nameChangeCon: true
          })
    }
    else{
        this.setState({
            nameChangeCon: false
          })
    }
  }

  change3(){
    const {tagChangeCon} = this.state
    if(tagChangeCon == false){
        this.setState({
            tagChangeCon: true
          })
    }
    else{
        this.setState({
            tagChangeCon: false
          })
    }
  }

  change4(){
    const {mottoChangeCon} = this.state
    if(mottoChangeCon == false){
        this.setState({
            mottoChangeCon: true
          })
    }
    else{
        this.setState({
            mottoChangeCon: false
          })
    }
  }

  uploadImg(){
    Taro.chooseImage({
        count: 1, 
        sizeType: ['original', 'compressed'], 
        sourceType: ['album', 'camera'],
        success: function (res) {
        var ImgPaths = res.tempFilePaths
        this.setState({
            tempFilePaths: ImgPaths
            })
        }
    })
  }

  tag1delete(){
      this.setState({
          tag1:' '
      })
  }

  tag2delete(){
    this.setState({
        tag2:' '
    })
}

  tag3delete(){
    this.setState({
        tag3:' '
    })
}

  tag4delete(){
    this.setState({
        tag4:' '
    })
}

  tag5delete(){
    this.setState({
        tag5:' '
    })
}
  tag1Change(e) {
    this.setState({
        tag1: e.detail.value
    })
}
  tag2Change(e) {
    this.setState({
        tag2: e.detail.value
    })
}
  tag3Change(e) {
    this.setState({
        tag3: e.detail.value
    })
}
  tag4Change(e) {
    this.setState({
        tag4: e.detail.value
    })
}
  tag5Change(e) {
    this.setState({
        tag5: e.detail.value
    })
}
  headSave(){
    this.change1()
    Taro.showModal({
        content: '编辑成功!',
        showCancel: false
    })
  }
  nameSave(){
    this.change2()
    Taro.showModal({
        content: '编辑成功!',
        showCancel: false
    })
  }
  tagsSave(){
    // const { tag1, tag2, tag3, tag4, tag5 } = this.state
    // this.setState({
    //     tag1: tag1,
    //     tag2: tag2,
    //     tag3: tag3,
    //     tag4: tag4,
    //     tag5: tag5
    // })
    this.change3()
    Taro.showModal({
        content: '编辑成功!',
        showCancel: false
    })
  }
  mottoSave(){
    this.change4()
    Taro.showModal({
        content: '编辑成功!',
        showCancel: false
    })
  }
  
 
  render () {
    // eslint-disable-next-line no-unused-vars
    const {headChangeCon,nameChangeCon,mottoChangeCon,tagChangeCon,tag1,tag2,tag3,tag4,tag5,tempFilePaths,
    motto
    } = this.state
    return (
        <View className='index'>

            
            <View className='indexTop'>               
                <Button className='back' size='mini'onClick={this.tonomate}>
                    <Image className='backImg' src={backjpg} />
                </Button>
                 <View className='title'>
                    <View className='titleText'>我的名片</View>
                </View>
            </View>
            <View className='indexBottom'>
                <View className='info'>
                    <View className='infoHead'>
                        <View className='head'>头像</View>
                        <View className='name'>昵称</View>
                        <View className='tag'>
                            <View className='school'>学院</View>
                            <View className='majorGrade'>专业+年级</View>
                        </View>
                    </View>
                    <View className='motto'>{motto}</View>
                    <View>
                        <Image src={colorBall} className='cb' />
                    </View>
                </View>
                <View className='changes'>
                    <View className='change'>
                        <View className='whiteDot'></View>
                        <View className='changeItem'>
                            <View   className='changeText'onClick={this.change1.bind(this)}>修改头像</View>
                            <View>
                                <Image src={goTo} className='go' />
                            </View>
                        </View>
                    </View>
                    <View className='change'>
                        <View className='whiteDot'></View>
                        <View className='changeItem'>
                            <View className='changeText'onClick={this.change2.bind(this)}>修改昵称</View>
                            <View>
                                <Image src={goTo} className='go' />
                            </View>
                        </View>
                    </View>
                    <View className='change'>
                        <View className='whiteDot'></View>
                        <View className='changeItem'>
                            <View className='changeText'onClick={this.change3.bind(this)}>编辑tag</View>
                            <View>
                                <Image src={goTo} className='go' />
                            </View>
                        </View>
                    </View> 
                    <View className='change'>
                        <View className='whiteDot'></View>
                        <View className='changeItem'>
                            <View className='changeText'onClick={this.change4.bind(this)}>编辑同桌宣言</View>
                            <View>
                                <Image src={goTo} className='go' />
                            </View>
                        </View>
                    </View>
                </View>
                <Button className='exit' onClick={this.toLogin}>退出登录</Button>
            </View>
            {headChangeCon&&<View>
                <View className='control'>
                </View>
                <View className='chooseHeadContainer'>
                    <View className='chooseHeadImg'>
                        <Image className='headImg' src={tempFilePaths} />
                    </View>
                    <Button className='chooseHead'onClick={this.uploadImg.bind(this)}>选择图片</Button>
                    <View className='YesOrNo'>
                        <Button className='backToMine' onClick={this.change1.bind(this)}>返回</Button>
                        <Button className='sure'onClick={this.headSave.bind(this)}>确认</Button>
                    </View>
                </View>
            </View>
            }
            {!headChangeCon&&<View />}
            {nameChangeCon&&<View>
                <View className='control'></View>
                <View className='changeNameContainer'>
                    <Input  className='changeNameInput'placeholder='输入新昵称'></Input>
                    <View className='YesOrNo'>
                        <Button className='backToMine' onClick={this.change2.bind(this)}>返回</Button>
                        <Button className='sure'onClick={this.nameSave.bind(this)}>确认</Button>
                    </View>
                </View>
            </View>}
            {!nameChangeCon&&<View />}
            {mottoChangeCon&&<View>
                <View className='control'></View>
                <View className='changeMottoContainer'>
                    <Input  className='changeMottoInput'placeholder='输入同桌宣言（不超过24个字）'maxlength='24'></Input>
                    <View className='YesOrNo'>
                        <Button className='backToMine' onClick={this.change4.bind(this)}>返回</Button>
                        <Button className='sure'onClick={this.mottoSave.bind(this)}>确认</Button>
                    </View>
                </View>
            </View>}
            {!mottoChangeCon&&<View />}
            {tagChangeCon&&<View>
                <View className='control'></View>
                <View className='changeTagContainer'>
                    <View className='changeTagText1'>编辑Tag</View>
                    <View className='changeTagText2'>单个Tag字数不超过7个，总字数不超过25个
                    将Tag置为空，则视为删除Tag，不再显示</View>
                    <View className='changeTagItem'>
                        <Input className='changeTagInput' onInput={this.tag1Change.bind(this)}></Input>
                        <Button className='edit'>编辑</Button>
                        <Button className='delete'onClick={this.tag1delete.bind(this)}>删除</Button>
                    </View>
                    <View className='changeTagItem'>
                        <Input className='changeTagInput' value={tag2} onInput={this.tag2Change.bind(this)} ></Input>
                        <Button className='edit'>编辑</Button>
                        <Button className='delete' onClick={this.tag2delete.bind(this)}  >删除</Button>
                    </View>
                    <View className='changeTagItem'>
                        <Input className='changeTagInput'  value={tag3} onInput={this.tag3Change.bind(this)} ></Input>
                        <Button className='edit'>编辑</Button>
                        <Button className='delete' onClick={this.tag3delete.bind(this)}  >删除</Button>
                    </View>
                    <View className='changeTagItem'>
                        <Input className='changeTagInput' value={tag4}   onInput={this.tag4Change.bind(this)} ></Input>
                        <Button className='edit'>编辑</Button>
                        <Button className='delete'  onClick={this.tag4delete.bind(this)}  >删除</Button>
                    </View>
                    <View className='changeTagItem'>
                        <Input className='changeTagInput'  value={tag5}  onInput={this.tag5Change.bind(this)} ></Input>
                        <Button className='edit'>编辑</Button>
                        <Button className='delete'  onClick={this.tag5delete.bind(this)} >删除</Button>
                    </View>
                    <View className='YesOrNo'>
                        <Button className='backToMine' onClick={this.change3.bind(this)}>返回</Button>
                        <Button className='sure'  onClick={this.tagsSave.bind(this)}  >确认</Button>
                    </View>
                </View>
            </View>}
            {!tagChangeCon&&<View />}
        </View>
        
    )
  }
}