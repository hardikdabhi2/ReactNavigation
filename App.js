/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */




import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Settings from './Components/Settings/settings';
import Home from './Components/Home/home';
import Cart from "./Components/Cart/cart";
import Order from './Components/Order/order';
import SignUp from './Components/SignUp/signup';

const NavStack = createStackNavigator({
    ScreenOne: { 
        screen: Home,
        navigationOptions: {
          header: null,
        }
    },
    ScreenTwo: { 
        screen: Settings,
    },
    Cart: {
      screen: Cart,
    },
    Order: {
      screen:Order,
    },
    SignUp:{
      screen:SignUp,
      navigationOptions:{
        header:null,
      },
    },
});

const App = createAppContainer(NavStack);

export default App;