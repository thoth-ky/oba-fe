import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';


import { NavigationBar } from './components/NavBarComponent';
import { HomeComponent, SignInComponent, SignUpComponent } from './components/HomeComponent';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider placement="top-center">
        <div className="App">
          <header className="App-header">
            <NavigationBar />
          </header>
          <div className="App-Body">
            <Switch>
              <Route exact path="/" component={HomeComponent} />
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
