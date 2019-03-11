import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';


import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Landing from './components/layout/landing';
import Login from './components/auth/login';
import Register from './components/auth/register';

if(localStorage.jwttoken){

  setAuthToken(localStorage.jwttoken);
  const decoded = jwt_decode(localStorage.jwttoken);
  store.dispatch(setCurrentUser(decoded))

  const currentTime = Date.now()/1000;
  if(decoded.exp < currentTime)
  {
    store.dispatch(logoutUser());

    window.location.href = '/login';
  }

}



class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component = {Landing} />
        <div className="container">
          <Route exact path="/login" component = {Login} />
          <Route exact path="/register" component = {Register} />
        </div>
        <Footer/>
      </div>
     </Router>
     </Provider>
    );
  }
}

export default App;
