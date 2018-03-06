import TabNavigator from 'react-native-tab-navigator'
import React, { Component } from 'react';
import Login from './src/app/login';
import FirstPage from './src/app/product';
import Market from './src/app/market';
import Design from './src/app/design';
import Me from './src/app/me';
import Icon from 'react-native-vector-icons/FontAwesome';
import Util from './src/util/util';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'home',
      lastTab:'home',
      store_id:8805,
      user:{
        name:null
      },
      login:false,
      showIndex: {
        height:0,
        opacity:0
      }
    };
  }
  _selectTab(newTabName){
    var currentTab = this.state.selectedTab;
    if(currentTab!=newTabName){
      this.setState({
        lastTab:currentTab,
      });
    }
    this.setState({
      selectedTab:newTabName,
    });
  }

  _scan() {
    this._selectTab('scan');
  }

  _renderNewTab(component, title) {
    var lastTab = this.state.lastTab;

    return <TabNavigator
        style={{flex:1}}
        barTintColor='#6bb967'
        titleTextColor="#fff"
        tintColor="#fff"
        translucent={false}
         />;
  }

  _onLogin(value) {
    this.setState({login:value});
  }

  render() {
     if(!this.state.login){
       return <Login onLogin={(value)=>{this._onLogin(value)}}/>;
     }

    if(this.state.selectedTab ==='scan'){
      return this._renderNewTab(Scan,'扫一扫');
    }

    return (
    <View style={styles.outer}>
         <View style={styles.header}>
            <Image style={styles.image} resizeMode='cover' source={require('./image/header.jpg')}/>
            <Text style={styles.logo}>你&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;行</Text>
         </View>
          <View style={styles.page}>
              <TabNavigator>
                <TabNavigator.Item
                  title="首页"
                  renderIcon={()=><Icon name="home" size={30} color="#666"/>}
                  renderSelectedIcon={()=><Icon name="home" size={30} color="#3496f0"/>}
                  selected={this.state.selectedTab ==='home'}
                  onPress={this._selectTab.bind(this,'home')}
                  >
                 <FirstPage style={styles.page}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                  title="发型列表"
                  renderIcon={()=><Icon name="search" size={30} color="#4F8EF7" />}
                  renderSelectedIcon={()=><Icon name="search" size={30} color="#3496f0"/>}
                  selected={this.state.selectedTab ==='design'}
                  onPress={this._selectTab.bind(this,'design')}
                  >
                  <Design style={styles.page}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                  title="购物车"
                  badge="4"
                  renderIcon={()=><Icon name="cart-plus" size={30} color="#4F8EF7" />}
                  renderSelectedIcon={()=><Icon name="cart-plus" size={30} color="#3496f0"/>}
                  selected={this.state.selectedTab ==='market'}
                  onPress={this._selectTab.bind(this,'market')}
                  >
                 <Market style={styles.page}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                  title="个人中心"
                  renderIcon={()=><Icon name="user" size={30} color="#4F8EF7" />}
                  renderSelectedIcon={()=><Icon name="user" size={30} color="#3496f0"/>}
                  selected={this.state.selectedTab ==='me'}
                  onPress={this._selectTab.bind(this,'me')}
                  >
                 <Me style={styles.page}/>
                </TabNavigator.Item>
              </TabNavigator>
            </View>
       </View>
    );
  }
}

  const styles = StyleSheet.create({
    outer: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: '#fff'
    },

    header: {
      height:50,
      flexDirection: 'row',
      borderBottomWidth:1,
      borderBottomColor: '#e7e7e7'
    },
    page: {
       flex: 1
    },

    image: {
       paddingTop: 8,
       left:10,
       height:45,
       width:70
    },

    logo: {
        fontSize: 20,
        paddingTop: 10,
        paddingLeft:60,
        fontWeight:'600',
        color: "#666",
        fontStyle:'italic',
        textDecorationLine: 'underline',
        textAlign:'center'
    }
  });