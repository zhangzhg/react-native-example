##项目说明

闲来无事，以前没做过app,学习一下react-native。这是一个用于理发店的app

##一些说明

* 安装说明
    *  建议使用真机测试，这样不会卡
    *  也可以使用模拟器genymotion，这个是在虚拟机里面跑的，需要安卓虚拟机，但是十分卡，启动模拟器后双击R可刷新。
    *  原来打算在linux虚拟机里面跑工程，结果发现非常的卡，所以直接在window下开发。
    *  node安装的时候建议使用nvm，node_modules包安装的时候可以用npm，或者代理国内的镜像，或使用cnpm。也可以用yarn，这个速度速度回比较快。
    *  安装Android SDK 的时候建议下载安装，否则没有vpn会很卡，很有可能安装不起来。
* 启动说明
    *  连接手机，开启调试（开启调试后，点击三次设置里面的版本即可），或者启动genymotion模拟器。
    *  npm install(or yarn)
    *  react-native run-android
* 界面说明
    -  登录页面  <br />
      ![login](/readme/login.png)  
      
    -  首页 <br />
    ![home](/readme/home.png)
    
    -  发型设计浏览页,滚动图片，加载图片对应的详细评论信息。 <br />
    ![design](/readme/design.png)
    
##工程说明  <br />
这只是一个安卓版本，不支持ios
