import React from 'react';
import  { Navbar ,Icon} from 'amazeui-react';
//数据订正
var data = [{
		title: "首页",
		link: "/",
		icon: 'home',

	}, {
		title: "法治动态",
		link: "/fzdt",
		icon: 'leaf',

	}, {
		title: "法律服务",
		link: "",
		icon: 'sitemap',

	}, {
		title: "普法教育",
		link: "",
		icon: 'pencil',

	}, {
		title: "普法文化",
		link: "",
		icon: 'folder-open',
	}];

class NavbarCPT extends React.Component{
	
	constructor(props,context){
		super(props,context);
	}
	render(){
		var that = this;
		var router = this.context.router;
		console.log(router);
		return (<Navbar onSelect={(link,history,e) => {
			e.preventDefault();
			that.context.router.replace(link)
		}} data={data} theme={null}   index={this.props.index} />);
	}
}
NavbarCPT.contextTypes = {
	router: React.PropTypes.func.isRequired
};

export default NavbarCPT;