import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from '../src/components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts'

import AlertState from './context/alert/AlertState';
import ContactState from './context/contact/contactState';
import AuthState from './context/auth/AuthState';
import PrivateRoutes from './components/routing/PrivateRoutes';
import setAuthToken from "./utils/setAuthToken";


const App = () => {

  if(localStorage.token){
    setAuthToken(localStorage.token);
  }
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
                <Navbar/>
                <div className='container'>
                  <Alerts />
                  <Switch>
                    <PrivateRoutes exact path = "/" component={Home}/>
                    <Route exact path ="/about" component = {About}/>
                    <Route exact path = "/register" component = {Register} />
                    <Route exact path = "/login" component = {Login} />
                  </Switch>
                </div>
            </Fragment>
          </Router>
          </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
