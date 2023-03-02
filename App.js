import React, {Component} from 'react';
import BottomNavigator from './components/BottomNavigator';

import Explorer from './screens/Explorer';
import {
  View
} from 'react-native';
import MainHeader from './components/MainHeader';


class App extends Component {


  render() {
    return (
      <View style={{flex: 1}}>
        <MainHeader/>
      <BottomNavigator/>
      </View>
   

    );
  }

  
}



export default App;