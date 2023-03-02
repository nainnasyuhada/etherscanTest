import React, {Component} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  Image, Text, StyleSheet
} from 'react-native';
import {SearchBar, Button, ListItem} from 'react-native-elements';
import {MainHeader} from '../components/MainHeader'
import DisplayResult from './DisplayResult';

import axios from 'axios';


class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: [],
      status: '',
      loading: false,
    };
  }
  
  

  searchResult = async () => {
    const url = `https://mobiletest.etherscan.io/v1/api.ashx?key=796EBD8C9157B9EF4FF72CE7BCCEE&module=search&term=` + this.state.search;
    console.log("url: ", url);
    this.setState({loading: true});

    axios.get(url).then( (response)  => {
    console.log("data", response.data);
    this.setState({
      data:response.data,
      status:response.status,
      loading: false,
    })
  }).catch((error) => {
    console.error("Error", error);
  });
  };


  renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
         this.props.navigation.navigate('DisplayResult', {
            item:item

          })

      }
      
      >
      <ListItem bottomDivider>
        <ListItem.Content>

          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <View style={{padding: 10}}>
              <Image
          style={styles.tinyLogo}
          source={{uri: item.logo}}/>
          </View>
         <View style={{paddingLeft: 30}}>
  
          <ListItem.Title  style={{textTransform: 'uppercase', flex: 1, flexWrap: 'wrap'}}>{item.label}</ListItem.Title>
          <ListItem.Subtitle>
            {item.desc}
          </ListItem.Subtitle>
  </View>
</View>
      
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );

  render() {
    return (
   
      <View style={styles.searchContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.search}>
          <SearchBar
            containerStyle={{width: '90%', height: 80, backgroundColor:'none', borderColor:'none'}}
            placeholder="Search by Address / Token / TxHash / Tag"
            lightTheme
            round
            autoFocus={true}
            showLoading={false}
            autoCorrect={false}
            value={this.state.search}
            onChangeText={search => this.setState({search})}
            // onChangeText={(search) => this.searchResult(search)}
          />
          <Button
            buttonStyle={{padding: 9,}}
            title="Search"
            type="clear"
            onPress={() => this.searchResult()}
          />
        </View>

        {this.state.loading ? (
          <ActivityIndicator
            style={{
              position: 'absolute',
              flexDirection: 'row',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              marginTop: 0,
            }}
            size="large"
            color="#0275d8"
          />
        ) : (
          <FlatList
            style={{flex: 1}}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.label}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({

  search: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchContainer: {

    padding:20,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 15
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});



export default Explorer;