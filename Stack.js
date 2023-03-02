import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import App from "./App";

import Explorer from "./screens/Explorer";
import Favourite from "./screens/Favourite";
import Watchlist from "./screens/Watchlist";
import DisplayResult from "./screens/DisplayResult"


class Stack extends Component{
    render(){
        return(
            <AppContainer />
        )
    }
}

const myStack = createStackNavigator({
    'Home': App,
    'Explorer': Explorer,
    'Watchlist': Watchlist,
    'Favourite':Favourite,
    'DisplayResult':DisplayResult,

}, {
    initialRouteName: 'Home'
});

const AppContainer = createAppContainer(myStack)

export default Stack;