

import 'react-native-gesture-handler';

import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View
} from 'react-native';

import Watchlist from '../screens/Watchlist';
import Explorer from '../screens/Explorer';
import Favourite from '../screens/Favourite';
import DisplayResult from '../screens/DisplayResult';


const Tab = createBottomTabNavigator();



function BottomNavigator() {
  return (
    <View style={{flex: 1, justifyContent: 'flex-end'  }}>
    <NavigationContainer>
    <Tab.Navigator initialRouteName="App" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Explorer" component={Explorer} 
       options={{
        tabBarLabel: 'Explorer',
  
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="compass-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Watchlist" component={Watchlist}
      options={{
        tabBarLabel: 'Watchlist',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Favorite" component={DisplayResult} 
      options={{
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bookmark-outline" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  </NavigationContainer>
  </View>
  );
}

export default BottomNavigator;
