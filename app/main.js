import React from 'react';
import ReactDOM from  'react-dom';


class Test extends React.Component{
	render(){
		return (
			<div>
				<h1>Hello Wolrd!</h1>
				<h1>Hello Wolrd!</h1>
			</div>
		);
	}
}

ReactDOM.render(<Test /> , document.querySelector("#test"));
