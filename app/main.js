import React from 'react';
import ReactDOM from  'react-dom';
import { Router, Route, hashHistory} from 'react-router'
import  { Navbar , View} from 'amazeui-react';
import NavBarCPT from './NavBarCPT.js';





class App extends React.Component{
	render(){
		return(
			<Router history={hashHistory}>
    			<Route path="/" component={Home} />
    			<Route path="/fzdt" component={About} />
  			</Router>
  		);
	}
}

class About extends React.Component{
	render(){
		return (
			<div>
				<h1>法治动态</h1>
				<NavBarCPT history={this.props.history} index="法治动态" />
			</div>
		);
	}
	
}

class Home extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<h1>
					首页
				</h1>
				<NavBarCPT history={this.props.history}  routes={this.props.routes} index="首页"/>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector("#app"));
