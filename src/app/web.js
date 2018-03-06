var React = require('react');
var HTMLView = require('react-native-htmlview');
var {
  	StyleSheet,
  	View,
  	WebView,
} = React;

var Web = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  componentDidMount: function() {
    // alert(this.props.title+this.props.url)
  },

  render: function() {
  	var webView = null;
    if(this.props.url){
      webView = <WebView url={this.props.url}/>
    }
    return(
      <View style={{flex:1}}>
        {webView}
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:68,
  },
});


module.exports = Web;