import React from 'react';
import { Header } from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import HeaderFzdt from './storage/HeaderFzdt.js';
class Fzdt extends React.Component{
	render(){
		return (
			<div>
				<Header {...HeaderFzdt} />
				<NavBarCPT index="法治动态" />
			</div>
		);
	}
	
}
export default Fzdt;