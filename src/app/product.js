import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Good from './good';
import Util from '../util/util';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedItem:'goods1',
        data:[]
    }

    this._resetGoods('goods1');
  }

  _getGoods() {
    var url = Util.url + this.state.selectedItem + '.json';
    return Util.get(url);
  }
  _resetGoods(type) {
    this._getGoods(type).then((data)=>{
        this.setState({
            data:data,
            selectedItem:type
        });
    })
  }

  render() {
      return (
        <View style={styles.container}>
            <View style={styles.sidebar}>
              <TouchableHighlight style={styles.item} onPress={()=>{true}}>
                <View style={styles.btn}>
                  <Icon name="paper-plane" style={styles.icon} size={15}></Icon>
                  <Text style={styles.btnText}>护理产品</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={styles.item} onPress={()=>{true}}>
                <View style={styles.btn}>
                  <Icon name="paw" size={15} style={styles.icon} ></Icon>
                  <Text style={styles.btnText}>美甲产品</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={styles.item} onPress={()=>{true}}>
                <View style={styles.btn}>
                  <Icon name="envira" size={15} style={styles.icon} ></Icon>
                  <Text style={styles.btnText}>其他产品</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.list}>
              <ScrollView>
                 <Good data={this.state.data}/>
              </ScrollView>
            </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  sidebar: {
    width:90,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderStyle : 'solid'
  },
  item: {
    height:40
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    borderWidth: 1,
    borderColor: '#f6d5d5'
  },
  list: {
    flex: 1
  },

  icon: {
    marginRight: 5
  }
});
