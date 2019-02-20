import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import $ from 'jquery';

import '../assets/stylesheets/colors'
import '../assets/stylesheets/global'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/stylesheets/animate.css';
import '../assets/stylesheets/classy-nav.css';
import '../assets/stylesheets/elegant-icon.css';
import '../assets/stylesheets/font-awesome.min.css';
import '../assets/stylesheets/magnific-popup.css';

import 'bootstrap/dist/js/bootstrap';

import App from '../components/app'
import Index from '../components/index'
import SignUp from '../components/auth/sign_up'
import Login from '../components/auth/login'
import ConfirmUser from '../components/auth/confirm_user'
import UserConfirmed from '../components/auth/user_confirmed'
import NotFound from '../components/not_found'
import Unauthorized from '../components/auth/unauthorized'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/sign_up" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/confirm_user" component={ConfirmUser}/>
            <Route exact path="/user_confirmed" component={UserConfirmed}/>
            <Route exact path="/unauthorized" component={Unauthorized}/>
            <Route component={NotFound} />
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>,
    document.getElementById('application')
  )
})

// <Route exact path="/shop" component={Shop}/>
// <Route exact path="/cart" component={Cart}/>
// <Route exact path="/gallery" component={Gallery}/>
// <Route exact path="/contact" component={Contact}/>
// <Route exact path="/checkout" component={Checkout}/>
// <Route exact path="/account" component={Account}/>
// <Route exact path="/orders/:orderId" component={Order}/>
// <Route exact path="/confirmation/:orderId" component={CheckoutConfirmation}/>
// <Route exact path="/products/:productId" component={Product}/>
// <Route exact path="/unauthorized" component={Unauthorized}/>
// <Route component={NotFound} />