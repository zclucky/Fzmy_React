import React from 'react';
import Header from 'amazeui-react';
var props = {
  title: 'Amaze UI',
  link: '#title-link',
  data: {
    left: [
      {
        link: '#left-link',
        icon: 'home'
      }
    ],
    right: [
      {
        link: '#right-link',
        icon: 'bars'
      }
    ]
  },
  onSelect: function(nav, e) {
    e.preventDefault();
    console.log('你点击了', nav);
    // do something
  }
};
class NavHeader extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (<Header {props} />);
		}
	}
}


export default NavHeader;