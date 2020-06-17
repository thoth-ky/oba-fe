/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';


import { NavigationBar } from './components/NavBarComponent';
import { HomeComponent, SignInComponent, SignUpComponent } from './components/HomeComponent';

import './App.css';

// checks if user is authenticated
const isAuthenticated = () => !!sessionStorage.getItem('access_token');

//  defines private routes
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to="/signin" />)}
  />
);


function App() {
  
  return (
    <BrowserRouter>
      <ToastProvider placement="top-center">
        <div className="App">
          <header className="App-header">
            <NavigationBar isAuthenticated={isAuthenticated()}/>
          </header>
          <div className="App-Body">
            <Switch>
              <PrivateRoute exact path="/" component={HomeComponent} />
              <Route path="/signin" component={SignInComponent} />
              <Route path="/signup" component={SignUpComponent} />

            </Switch>
          </div>
        </div>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
