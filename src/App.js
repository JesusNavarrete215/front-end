import './App.css';
import { Route, Switch } from 'react-router';

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import OrganizerForm from "./components/OrganizerForm";
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path='/feed' component={OrganizerForm}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
