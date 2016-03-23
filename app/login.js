import React from 'react';
import Headerbar from './api/Headerbar.js';
class Login extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="登录" link='/login' prev={[{link:'/',icon:'chevron-left'}]} next={[{link:'/reg',title:'快速注册'}]} />
			</div>
		);
	}
	
}
export default Login;