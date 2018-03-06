import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Me extends Component {
  constructor(props) {
    super(props);
  }

  _minusItem(item) {

  }

  _addItem() {

  }

  render() {
      var arr = [];
      this.props.data.forEach(function(obj, index){
          arr.push(
            <View key={obj.name}>
              <View style={styles.itemWrap}>
                <View style={styles.item}>
                  <Image source={require('../../image/bg_login.jpg')} style={{backgroundColor:"#f9f9f9",width: 60, height: 50, resizeMode: "contain", marginRight: 8}}/>
                  <View style={{flex: 1}}>
                    <Text style={{fontSize: 14, color: "#333", fontWeight: "bold"}}>{obj.name}</Text>
                    <Text numberOfLines={2} style={{fontSize: 13, color: "#999", paddingVertical: 4}}>发型师评价：{obj.info}</Text>
                  </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.item1}>
                        <Text style={{fontSize: 10, paddingTop: 10, color: "#666"}}>赞：{obj.support}</Text>
                        <Icon name="thumbs-up" size={15} style={styles.icon}></Icon>
                        <Text style={{fontSize: 16,fontWeight:"bold", color: "#ff6000", paddingTop: 5, paddingLeft: 10}}>价格：{`${obj.price}`}</Text>
                    </View>
                    <View style={styles.item2}>
                        <Icon name="plus-circle" size={15} style={styles.btn}></Icon>
                     </View>
                 </View>
              </View>
             </View>
          );
      });

    return <View>{arr}</View>;
  }
}

const styles = StyleSheet.create({
  itemWrap: {
    paddingTop: 12,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    backgroundColor: "#fff",
    paddingHorizontal: 12
  },

  item: {
    flex:1,
    flexDirection: "row"
  },

  item1: {
    flex:0.8,
    flexDirection: "row"
  },

  item2: {
    flex:0.2
  },

  icon: {
    paddingTop: 8,
    paddingLeft: 8
  },

  btn: {
    paddingTop: 8,
    color:"#3d85c6"
  }
})
