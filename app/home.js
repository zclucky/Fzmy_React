import React from 'react';
import Header from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import HeaderData from './storage/HeaderData.js';
class Home extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(

			<div>
				<Header {...HeaderData} />
				<NavBarCPT  index="首页"/>
			</div>
		);
	}
}
export default Home;