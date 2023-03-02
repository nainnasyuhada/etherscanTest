import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { Header} from 'react-native-elements';

const MainHeader = ({navigation}) => {

    const renderLogo = () => {
        return(
          <TouchableOpacity onPress={() => navigation.navigate('Explorer')}>
            <Image
              style={styles.tinyLogo}
              source={{uri: 'https://miro.medium.com/max/350/0*E1IshKUJE53qtr9C.png'}}
             />
           </TouchableOpacity>
        );
      };

      const renderQRCode = () => {
        return(
          <TouchableOpacity onPress={() => navigation.navigate('Watchlist')}>
            <Image
              style={styles.tinyLogo}
              source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/QR_icon.svg/1024px-QR_icon.svg.png'}}
             />
           </TouchableOpacity>
        );
      };
    

  return (
    <SafeAreaView >
      <View style={styles.container}>
      <Header
  placement="left"

  backgroundColor='blue'
  leftComponent={() => renderLogo()}
  centerComponent={{ text: 'Etherscan', style: { color: '#fff', fontSize:25, paddingVertical:8} }}
  rightComponent={() => renderQRCode()}
/>


     
      </View>
  
    </SafeAreaView>



  );
};

export default MainHeader;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 45,
    height: 45,
    tintColor: 'white'
  },
});