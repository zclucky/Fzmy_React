import React from 'react';
import Headerbar from './api/Headerbar.js';
import NavBarCPT from './api/NavBarCPT.js';
class Pfwh extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="普法文化" link='/pfwh'/>
				<NavBarCPT index="普法文化" />
			</div>
		);
	}
	
}
export default Pfwh;