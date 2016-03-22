import React from 'react';
import Headerbar from './api/Headerbar.js';
import NavBarCPT from './api/NavBarCPT.js';
class Fzdt extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="法治动态" link='/fzdt' />
				<NavBarCPT index="法治动态" />
			</div>
		);
	}
	
}
export default Fzdt;