import React from 'react';
import NavBarCPT from './api/NavBarCPT.js';
import Process  from './api/process.js';
class Home extends React.Component{
 	constructor(props){
		super(props);
		let that = this;
		this.state={
			lunbo : []
		}
		console.log(this);
		let process = new Process({
			"url":"/homeMa/AppHomeImg.action",
			options:{
				"name":"lunbo",
				"callback":"1"
			},
			headers:{},
			callback:function(data){
				data = JSON.parse(data.slice(0,-1).slice("lunbo".length+1));
				that.setState({
					lunbo: data
				});
				console.log(that.state);
			}
		});
		process.push();
	}

	render(){
		let lubo = this.state.lunbo.map(function(data,index){
			return (
				<img style={{width:"300px",height:"150px","display":"block","margin":"auto"}} key={index} src={"http://www.myflfw.com/"+data.imgUrl} />
			);
		});
		return(
			<div style={{display:"block",width:"100%"}}>
				<h1>
					首页
				</h1>
				<div>
					{lubo}
				</div>
				<NavBarCPT  index="首页"/>
			</div>
		);
	}
	
}
export default Home;