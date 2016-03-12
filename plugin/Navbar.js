'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactDOM = require("react-dom");
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Icon = require('./Icon');
var omit = require('object.omit');
var activeStyles = {
  color:"#0e90d2",
  fontSize:"12px",
  fontWeight:"bold",
};
var noCheckedStyles = {
   color:"#ABB"
}
var Navbar = React.createClass({
  displayName: 'Navbar',

  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string,
    theme: React.PropTypes.oneOf(['default']),
    data: React.PropTypes.array,
    index:React.PropTypes.string,
    onSelect: React.PropTypes.func
  },
  
  getDefaultProps: function getDefaultProps() {
    return {
      classPrefix: 'navbar',
      theme: 'default',
      data: [],
      index:"",
      onSelect: function onSelect() {}
    };
  },
  getInitialState:function(){
    return {
      index : this.props.index
    }
  },
  render: function render() {
    var classSet = this.getClassSet();
    var props = omit(this.props, 'data');
    var that = this;
    return React.createElement(
      'div',
      _extends({}, props, {
        'data-am-widget': this.props.classPrefix,
        cf: true,
        className: classNames(this.props.className, classSet) + " navbar",
        styles:"background: rgba(235,235,235,0.25);"
      }),
      React.createElement(
        'ul',
        { className: this.prefixClass('nav') },
        this.props.data.map((function (item, i) {
          var that = this;
          var Link = item.component || 'a';
          var LinkProps = item.props || {};
          return React.createElement(
            'li',
            {
              key: i,
              onClick:function(e){
                e.preventDefault();
                that.setState({
                  index:item.title
                });
                that.props.onSelect(item.link,that.history,e);
              },
            },
            React.createElement(
              Link,
              _extends({
                href: item.link
              }, LinkProps),
              item.customIcon ? React.createElement('img', {
                src: item.customIcon,
                alt: item.title,
                style : this.state.index == item.title ? activeStyles:noCheckedStyles
              }) : item.icon ? React.createElement(Icon, { 
                  icon: item.icon ,
                  style : this.state.index == item.title ? activeStyles:noCheckedStyles
              }) : null,
              item.title ? React.createElement(
                'span',
                { 
                  className: this.prefixClass('label'), 
                  style : this.state.index == item.title ? activeStyles:noCheckedStyles
                },
                item.title
              ) : null
            )
          );
        }).bind(this))
      )
    );
  }
});

module.exports = Navbar;