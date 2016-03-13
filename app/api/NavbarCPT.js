import React from 'react';
import  { Navbar ,Icon} from 'amazeui-react';
import  NavData from '../storage/navData.js';
class NavbarCPT extends React.Component{
	
	constructor(props,context){
		super(props,context);
	}
	render(){
		var that = this;
		var router = this.context.router;
		console.log(router);
		return (<Navbar onSelect={(link,history,e) => {
			e.preventDefault();
			that.context.router.replace(link)
			//let [head, ...tail] = [1, 2, 3, 4];
			//console.log(tail);
		}} data={NavData} theme={null}   index={this.props.index} />);
	}
}
NavbarCPT.contextTypes = {
	router: React.PropTypes.func.isRequired
};

export default NavbarCPT;