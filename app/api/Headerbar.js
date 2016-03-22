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
		if(this.props.index !=='首页'){
			HeaderData.data.left = null;
			HeaderData.data.right = null;
		}else{
			let titleStorage=localStorage.getItem('userDetail')||'未登录';
			HeaderData.data.left =  [{
								        link: '#left-link',
								        title:titleStorage,
								    }];
			HeaderData.data.right = [{
								        link: '#right-link',
								        icon: 'bell',
								    }];
		}
		console.log(HeaderData);
	}
	render(){
		return(
			<Header {...HeaderData} />
		)
	}
}
export default Headerbar;