import React  from 'react';
import Header from 'amazeui-react';
class NavHeader extends React.Component{
	render() {
		return (
      <Header {...this.props}/>
    );
	}
}
export default NavHeader;