import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import CategoryState from './context/category/CategoryState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Alerts from './components/layout/Alerts';
import Navbar from './components/layout/Navbar';
import Category from './components/pages/Category';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import PrivateRoute from './components/routing/PrivateRoute';

function App() {
  return (
    <AuthState>
      <CategoryState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/about' component={About} />
                  <PrivateRoute exact path='/category' component={Category} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </CategoryState>
    </AuthState>
  );
}

export default App;
