import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


import './App.css';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {

const logout = () => {
  localStorage.removeItem('token');
}

  return (
    <Router>
    <div className="App">
      <header className="App-header">
          <h1>THIS IS THE PLACE FOR FRIENDS</h1>
          <br/>
          <div className="theLinks">
            <Link className="link" to="/loginForm">the Login</Link>
            <Link className="link" to="/friendsList">Friends</Link>
            <Link className="link" onClick={logout}>logout</Link>
          </div>
      </header>

    <Switch>
        <PrivateRoute exact path='/friendsList' component={FriendsList}   />
        <Route path='/loginForm' component={LoginForm}/>
        <Route component={LoginForm}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
