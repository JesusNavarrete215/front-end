import './App.css';
import { Route, Switch } from 'react-router';

import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import OrganizerForm from "./components/OrganizerForm";
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import { useState } from 'react';

function App() {

  const token = localStorage.getItem('token');

  const [ auth, setAuth ] = useState(token);

  return (
    <div className="App">
      <Navigation auth={auth} setAuth={setAuth}/>
      <Switch>
        <PrivateRoute exact path='/feed' component={OrganizerForm}/>
        <Route path='/login' render={(props) => {
          return <Login {...props} auth={auth} setAuth={setAuth} />
        }}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
