import React from 'react';
import NavBarCPT from './api/NavBarCPT.js';
import Headerbar from './api/Headerbar.js';
class Pfjy extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="普法教育" link='/pfjy' />
				<NavBarCPT index="普法教育" />
			</div>
		);
	}
	
}
export default Pfjy;