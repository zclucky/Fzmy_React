import React from 'react';
import ReactDOM from  'react-dom';
import { Router, Route, hashHistory} from 'react-router'
import { Navbar , View} from 'amazeui-react';
import Home  from './home.js';
import Fzdt  from './fzdt.js';
import Flfw  from './flfw.js';
import Pfjy  from './pfjy.js';
import Pfwh  from './pfwh.js';
import Login  from './login.js';
import Reg  from './reg.js';
class App extends React.Component{
	render(){
		return(
			<Router history={hashHistory}>
    			<Route path="/" component={Home} />
    			<Route path="/fzdt" component={Fzdt} />
    			<Route path="/flfw" component={Flfw} />
    			<Route path="/pfjy" component={Pfjy} />
    			<Route path="/pfwh" component={Pfwh} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
  			</Router>
  		);
	}
}
ReactDOM.render(<App />, document.querySelector("#app"));
