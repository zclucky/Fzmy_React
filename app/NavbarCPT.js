import React from 'react';
import  { Navbar ,Icon} from 'amazeui-react';
var data = [{
		title: "首页",
		link: "",
		icon: 'home',

	}, {
		title: "法治动态",
		link: "",
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
	var handleSelect = function (link, e) {
		e.preventDefault();
		console.log(Navbar,e.target.parentNode, link);
	};
class NavbarCPT extends React.Component{
	
	render(){
		return (<Navbar onSelect={handleSelect} data={data} theme='basic'  />);
	}

}
export default NavbarCPT;