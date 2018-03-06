import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';

import {
  	StyleSheet,
  	View,
  	Image,
    Text,
} from 'react-native';

export default class extends Component {
  render() {
    let item = this.props.data;
    return (
     <View style={styles.item} key={this.props.index}>
       <View style={{marginTop:2,flexDirection:'row',paddingRight:20}}>
         <View>
           <Image source={require('../../image/bg_login.jpg')} style={{width:40,height:40,borderRadius:20}} />
         </View>

         <View style={{marginLeft:10,flex:1}}>
           <View style={{flexDirection:'row'}}>
             <Text style={{lineHeight:25}}>{item.name}</Text>
           </View>
           <Text style={{marginBottom:8,color:'#3B3B3B'}}>{item.content}</Text>
           <Text style={styles.smallFont}>
             {this.props.index}天前
           </Text>
         </View>

         <View style={{position:'absolute',right:30,top:2,flexDirection:'row'}}>
           <Icon name="thumbs-up" size={15}></Icon>
           <Text style={{color:'#9B9B9B',marginTop:-2, marginLeft:5}}>{item.count}</Text>
         </View>
       </View>
     </View>
    );
  }
}

var styles = StyleSheet.create({
  smallFont:{
    fontSize:11,
    color:'#9B9B9B',
  },
  item: {
    height:80,
    borderWidth: 1,
    borderBottomWidth:0,
    borderColor: '#e7e7e7',
    borderStyle : 'solid'
  }
});
