import React from 'react';
import { Slider,Header } from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import Headerbar from './api/Headerbar.js';
import Process  from './api/process.js';
class Home extends React.Component{
 	constructor(props){
		super(props);
		this.state={
			lunbo : []
		}
	}
	componentWillMount(){
		let that = this;
		let process = new Process({
			"url":"http://www.myflfw.com/law/App/homeMa/AppHomeImg.action",
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
			}
		});
		process.push();
	}
	render(){
		var lubo = this.state.lunbo.map(function(data,index){
			return (
				 <Slider.Item key={index}>
			      	<img src={"http://www.myflfw.com/"+data.imgUrl} />
			    </Slider.Item>
			);
		});
		var titleStorage=localStorage.getItem('userDetail')||'未登录';
		return(
			 <main className="amr-main">
			 	<Headerbar index = '首页' link="/" prev={[{link:'/login',title:titleStorage}]}
			 	 next={[{link:'#right-link', icon: 'bell'}]} />
				<Slider theme="c2">
		    		{lubo}
		  		</Slider>
		 		<NavBarCPT  index="首页"/>
			</main>
		);
	}
	
}
export default Home;