import React from 'react';
import { Header } from 'amazeui-react';
import HeaderFlfw from './storage/HeaderFlfw.js';
import NavBarCPT from './api/NavBarCPT.js';
class Flfw extends React.Component{
	render(){
		return (
			<div>
				<Header {...HeaderFlfw} />
				<NavBarCPT index="法律服务" />
			</div>
		);
	}
	
}
export default Flfw;