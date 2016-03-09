import React from 'react';
import ReactDOM from  'react-dom';
import { Router, Route, Link } from 'react-router'
import {Button,Grid,Col} from 'amazeui-touch';
import NavBarCPT from './NavBarCPT.js';
class App extends React.Component{
	render(){
		return(
			<Grid className="main">
				<Col sm={4}>4</Col>
	    		<Col sm={8}>8</Col>
			</Grid>
		)
	}
}
class Test extends React.Component{
	render(){
		return (
			 <NavBarCPT />
		);
	}
}

ReactDOM.render(<NavBarCPT /> , document.querySelector("#app"));
