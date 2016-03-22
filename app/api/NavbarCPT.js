import React from 'react';
import  { Header ,Icon,Navbar} from 'amazeui-react';
import  NavData from '../storage/navData.js';

class NavbarCPT extends React.Component{
	
	constructor(props,context){
		super(props,context);
	}
	render(){
		var that = this;
		var router = this._reactInternalInstance._context.router;//fix trouble issues
		return (<Navbar onSelect={(link,history,e) => {
			e.preventDefault();
			router.replace(link)
		}} data={NavData} theme={null}   index={this.props.index} />);
	}
}
/*
NavbarCPT.contextTypes = {
	router: (React.PropTypes.func.isRequired || this._reactInternalInstance._context.router)
};
*/

export default NavbarCPT;