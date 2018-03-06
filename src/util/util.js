import React from 'react';
import Dimensions from 'Dimensions';

import {
  PixelRatio
} from 'react-native';

const basePx = 375

var Util = {
  url: 'http://192.168.1.101:8081/data/',
  //单位像素
  pixel: 1 / PixelRatio.get(),
  //屏幕尺寸
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  px2dp(px) {
      return px *  this.size.with / basePx;
  },

  //post请求
  post: function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
    .then((response) => response.text())
    .then((responseText) => {
      callback(JSON.parse(responseText));
      // callback(responseText);
    }).done();
  },

  //get请求
  get: function (url) {
    return fetch(url)
    .then((response) => response.text())
    .then((responseText) => JSON.parse(responseText))
    .catch((err)=>{
       alert(err);
     })
   },

  log:function (obj){
    var description = "";
     for(var i in obj){
        var property=obj[i];
        description+=i+" = "+property+"\n";
     }
     alert(description);
  },
  //Key
  key: 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE'

};

module.exports = Util;