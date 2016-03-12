import React from 'react';
import NavBarCPT from './api/NavBarCPT.js';
class Home extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(

			<div>
			<h1>首页 </h1>
				<NavBarCPT  index="首页"/>
			</div>
		);
	}
}
export default Home;