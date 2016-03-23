import React from 'react';
import  { Header } from 'amazeui-react';
import HeaderData from '../storage/HeaderData.js';
class Headerbar extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		HeaderData.title = this.props.index;
		HeaderData.link = this.props.link;
		HeaderData.data.left =  this.props.prev;
		HeaderData.data.right = this.props.next;
		console.log(HeaderData);
	}
	render(){
		return(
			<Header {...HeaderData} />
		)
	}
}
export default Headerbar;