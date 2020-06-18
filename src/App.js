/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect, useHistory,
} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';


import { NavigationBar } from './components/NavBarComponent';
import {
  HomeComponent, SignInComponent, SignUpComponent, SignOutComponent,
} from './components/HomeComponent';
import UploadComponent from './components/UploadComponent';
import BusinessComponent from './components/BusinessComponent';
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
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());
  useEffect(() => {

  }, [loggedIn]);
  return (
    <BrowserRouter>
      <ToastProvider placement="top-center">
        <div className="App">
          <header className="App-header">
            <NavigationBar isAuthenticated={isAuthenticated()} />
          </header>
          <div className="App-Body">
            <Switch>
              <PrivateRoute exact path="/" component={HomeComponent} />
              <Route path="/signin" render={() => <SignInComponent setLoggedIn={setLoggedIn} />} />
              <Route path="/signup" component={SignUpComponent} />
              <PrivateRoute path="/signout" component={SignOutComponent} />
              <PrivateRoute path="/business/:id/upload" component={UploadComponent} />
              <PrivateRoute path="/business/:id" component={BusinessComponent} />
            </Switch>
          </div>
        </div>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
