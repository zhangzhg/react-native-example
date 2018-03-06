import React, { Component } from 'react';
import Util from '../util/util';
import Swiper from 'react-native-swiper';
import Discuss from './discuss';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const { width } = Util.size.width;
const loading = require('../../image/loading.gif');

const Slide = props => {
  return (<View style={styles.slide}>
    <Image onLoad={props.loadHandle.bind(null, props.i)} resizeMode='cover' style={styles.image} source={{uri: props.uri}} />
    {
      !props.loaded && <View style={styles.loadingView}>
        <Image style={styles.loadingImage} source={loading} />
      </View>
    }
  </View>)
}

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imgList: [
        'https://gitlab.pro/yuji/demo/uploads/d6133098b53fe1a5f3c5c00cf3c2d670/DVrj5Hz.jpg_1',
        'https://gitlab.pro/yuji/demo/uploads/2d5122a2504e5cbdf01f4fcf85f2594b/Mwb8VWH.jpg',
        'https://gitlab.pro/yuji/demo/uploads/4421f77012d43a0b4e7cfbe1144aac7c/XFVzKhq.jpg',
        'https://gitlab.pro/yuji/demo/uploads/576ef91941b0bda5761dde6914dae9f0/kD3eeHe.jpg'
      ],
      data: [
        {list:[{name:'公主',content:'很漂亮',count:200},{name:'张三',content:'妞妞',count:200},{name:'樱桃小凡子',content:'没得说',count:200}], loadQueue:false},
        {list:[{name:'李六',content:'很帅气',count:200},{name:'张三',content:'樱桃小凡子',count:200},{name:'王五',content:'王子',count:200}], loadQueue:false},
        {list:[{name:'王五',content:'公主',count:200},{name:'李四',content:'厉害',count:200},{name:'张三',content:'没得说',count:200}], loadQueue:false},
        {list:[{name:'张三',content:'很漂亮',count:200},{name:'王五',content:'美得你',count:200},{name:'妞妞',content:'王八之气',count:200}], loadQueue:false}
      ],
      selected:{list:[]}
    }

    //后面就不用写bind this
    this._loadHandle = this._loadHandle.bind(this);
    this._indexChanged = this._indexChanged.bind(this);
  }
  
  _loadHandle(i) {
    let data = this.state.data;
    data[i].loadQueue = true;

    this.setState({
      data
    });

    if (i === 0) {
       this._indexChanged(0);
    }
  }

  _indexChanged(i) {
     let selected = this.state.selected;
     selected = this.state.data[i];
     this.setState({
       selected
     });
  }
  
  render () {
    let ITEM_SIZE = Util.size.height-350;

    return (
      <View style={styles.wrapper}>
        <View style={styles.top}>
            <Swiper loadMinimal onIndexChanged={this._indexChanged} loadMinimalSize={1} loop={false}>
              {
                this.state.imgList.map((item, i) => <Slide
                  loadHandle={this._loadHandle}
                  loaded={this.state.data[i].loadQueue}
                  uri={item}
                  i={i}
                  key={i} />)
              }
            </Swiper>
        </View>
        <View style={styles.wrapperDiscuss}>
          <View style={styles.topDiscuss}>
            <Text>评论</Text>
              <TouchableOpacity style={styles.writeDiscuss} onPress={()=>alert('你要写短评')}>
                <Text style={styles.discuss}>写评论</Text>
              </TouchableOpacity>
          </View>

          <View>
            <ScrollView>
             {
                this.state.selected.list.map((item, i) => <Discuss key={i} index={i} data={item}/>)
             }
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection:'column'
  },

  top: {
    height:300
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  loadingImage: {
    width: 60,
    height: 60
  },

  discuss: {
    fontSize:10,
    color:'#3d85c6'
  },

  writeDiscuss: {
    borderWidth:1,
    borderColor:'#3d85c6',
    borderRadius:5,
    padding:4
  },

  topDiscuss: {
    flexDirection:'row',
    paddingTop:5,
    justifyContent:'space-between',
    height:30
  },

  bottomDiscuss: {
    flex: 1,
     backgroundColor: '#333333'
  },

  wrapperDiscuss: {
    flex:1,
    paddingLeft:15,
    paddingRight:15,
    backgroundColor: '#f4f4f4'
  }
});