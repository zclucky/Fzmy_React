import React from 'react';
import Headerbar from './api/Headerbar.js';
class LawReg extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="法律服务人员注册" link='/lawReg' prev={[{link:'/',icon:'chevron-left'}]} next={[{link:'/login',title:'登录'}]} />
			</div>
		);
	}
	
}
export default LawReg;