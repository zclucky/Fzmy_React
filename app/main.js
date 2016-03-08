import React from 'react';
import ReactDOM from  'react-dom';
import AMUIReact from 'amazeui-react';

const Button = AMUIReact.Button;

class Test extends React.Component{
	render(){
		return (
			<div>
				<h1>Hello Wolrd!</h1>
				<h1>Hello Wolrd!</h1>
				<Button>Hello</Button>
			</div>
		);
	}
}

ReactDOM.render(<Test /> , document.querySelector("#app"));
