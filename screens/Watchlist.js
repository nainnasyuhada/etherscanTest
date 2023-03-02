// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Image
} from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

export default function Watchlist() {
  const [watchlist, setWatchList] = useState([]);
  const tempData = require('../assets/tempWatchlist.json');

  useEffect(() => {
    setWatchList(tempData.tempWatchlist);
    console.log("response",watchlist);
   
  }, []);

  const savedWatchlist = () => {

    return watchlist.map((item, key) => {
        return (
          <View style={{ marginTop: 10, backgroundColor: 'white', width:'100%', justifyContent: 'center', alignItems: 'center'}}>
             <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
             <View >
              <Image
          style={styles.tinyLogo}
          source={{uri: item.image}}/>
          </View>
          <View>
            <Text style={{flexWrap: 'wrap', margin:10, width:200}}>{item.address}</Text>
          </View>
          <View>
            <Text style={{backgroundColor:'red', margin:10, padding:10, borderRadius:10}}>-0.93$</Text>
          </View>
             </View>

             <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor:'#D3D3D3', marginTop:10}}>
          <View style={styles.valueContainer}>
             <Text style={styles.title}>VALUE IN ETH</Text>
             <Text style={styles.value}>{item.balance}</Text>
          </View>
         <View style={styles.valueContainer}>
  
          <Text style={styles.title}>VALUE IN USD</Text>
          <Text style={styles.value}>{item.balanceInUSD}</Text>
  </View>
</View>
          </View>
           
        )
    })
}


  return (
  <View style={{padding: 20}}>
    <Text style={styles.header}>Your Watchlist</Text>
    {savedWatchlist()}



    <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 40}}>
      <Button
      
            buttonStyle={{
              borderRadius: 8,
              marginTop: 30,
              
              backgroundColor:'blue',
              
            }}
            title="ADD ADDRESS TO WATCHLIST"
          />
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  header:{
    marginVertical:7,
    fontWeight:'bold',
    fontSize: 17
  },
  tinyLogo: {
    width: 30,
    height: 30,
    borderRadius: '50%', 
    marginHorizontal: 10,
  },
  title: {
    textTransform: 'uppercase',
    color: 'grey',
  },
  value:{
    // flex: 1, 
    flexWrap: 'wrap'
  },
  valueContainer:{
    flexWrap: 'wrap',
    // paddingHorizontal: 40, 
    // paddingBottom:15, 
    ustifyContent: 'center', 
    alignItems: 'center'

  }
});


