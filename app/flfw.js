import React from 'react';
import Headerbar from './api/Headerbar.js';
import NavBarCPT from './api/NavBarCPT.js';
class Flfw extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="法律服务" link='/flfw'/>
				<NavBarCPT index="法律服务" />
			</div>
		);
	}
	
}
export default Flfw;