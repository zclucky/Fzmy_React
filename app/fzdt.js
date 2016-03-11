import React from 'react';
import NavBarCPT from './api/NavBarCPT.js';
class Fzdt extends React.Component{
	render(){
		return (
			<div>
				<h1>法治动态</h1>
				<NavBarCPT index="法治动态" />
			</div>
		);
	}
	
}
export default Fzdt;