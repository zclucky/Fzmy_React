import React from 'react';
import  { TabBar , View, Container, Icon , Badge,Group,amStyles} from 'amazeui-touch';
class NavbarCPT extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selected: 'home'
		}
  	}
	render(){
		return(
			<Container fill direction="column">
				<View>
					<TabBar  amStyle="dark"  onSelect={(key,e) =>
					    {
							e.preventDefault();
							this.setState({
						      selected: key
						    }, function() {
						      console.log('选中了： %s',key,this.state.selected);
						    });
						}}  
					>
			            <TabBar.Item active={this.state.selected === 'home'}    icon="home" title="首页" eventKey="home" />
			            <TabBar.Item active={this.state.selected === 'gear'} icon="gear" title="设置" eventKey="gear" />
			            <TabBar.Item active={this.state.selected === 'info'} icon="info" badge={5} title="信息" eventKey="info" />
					</TabBar>
					<Container scrollable>
						<Group>
						<h1>1123</h1>
						<h1>1123</h1>
						<h1>1123</h1>
						</Group>
					</Container>
				</View>
			</Container>
		);
	}
}
export default NavbarCPT;