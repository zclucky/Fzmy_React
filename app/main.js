import React from 'react';
import ReactDOM from  'react-dom';
import { Router, Route, Link } from 'react-router'
import  { Navbar ,Icon} from 'amazeui-react';
import NavBarCPT from './NavBarCPT.js';

class APP extends React.Component{
	render(){
		return (
			 <NavBarCPT />
		);
	}
}

ReactDOM.render(<NavBarCPT />, document.querySelector("#app"));
