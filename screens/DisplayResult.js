import React, {useEffect, useState} from 'react';

import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

import axios from 'axios';
import Explorer from '../screens/Explorer';


export default function DisplayResult() {
  const [details, setDetails] = useState();
  const [loading, setLoading]=useState(false);
  useEffect(() => {
    fetchDetails();
   
  }, []);

   const fetchDetails = async () => {
    const url = `https://mobiletest.etherscan.io/v1/api.ashx?key=796EBD8C9157B9EF4FF72CE7BCCEE&module=result&value=0x418d75f65a02b3d53b2418fb8e1fe493759c7605&type=2`
    console.log("url: ", url);
   setLoading(true);

    axios.get(url).then( (response)  => {

   setDetails(response.data.result);
   setLoading(false);
   console.log("details ", details);
  }).catch((error) => {
    console.error("Error", error);
  });
  };

  return(
    <View style={{flex: 1, padding:20}}>
        <Explorer/>

      <View style={styles.container}>
        <View style={styles.details}>
        <Image
          style={styles.tinyLogo}
          source={{uri: details.image}}/>
        </View>
   
      
        <Card>
          <View style={styles.details}>

         
          <Card.Title>{details.name}</Card.Title>

          <Text style={styles.token}>"Token"</Text>
          </View>
          <Card.Divider />

          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <View style={{paddingHorizontal: 40, paddingBottom:15, justifyContent: 'center', alignItems: 'center'}}>
             <Text style={styles.title}>PRICE</Text>
             <Text>{details.price}</Text>
          </View>
          <View style={styles.verticleLine}></View>
         <View style={{paddingHorizontal: 40, paddingBottom:15, justifyContent: 'center', alignItems: 'center'}}>
  
          <Text style={styles.title}>MARKET CAP</Text>
          <Text>{details.marketcap}</Text>
  </View>
</View>

<Card.Divider />
<View style={{paddingBottom: 15,  paddingLeft: 15}} >
<Text style={styles.title}>TOTAL SUPPLY</Text>
          <Text>{details.totalsupply}</Text>
</View>
<Card.Divider />
<View style={{paddingBottom: 15, paddingLeft: 15}}>
<Text style={styles.title}>CONTRACT</Text>
          <Text>{details.address}</Text>
</View>
        
     
          
        </Card>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 40}}>
      <Button
      
            buttonStyle={{
              borderRadius: 8,
              
    
              backgroundColor:'blue',
              
            }}
            title="VIEW MORE DETAILS"
          />
      </View>

       

      </View>

  )
  
}



const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  title: {
    textTransform: 'uppercase',
    color: 'grey',
  },
  token: {
    textTransform: 'uppercase',
    color: 'grey',
    paddingBottom: 15
  },
  details:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticleLine: {
    height: '95%',
    width: 0.5,
    paddingBottom:15,
    backgroundColor: 'grey',
  }

});



