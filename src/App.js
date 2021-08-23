import './App.css';
import { Route, Switch } from 'react-router';

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
				<Route path='/' component={Home} />
			</Switch>
		</div>
	);
}

export default App;
