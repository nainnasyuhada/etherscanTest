import {StyleSheet} from 'react-native';

const primaryColor = '#6F3A00';
const secondaryColor = '#00689E';
const white = '#FFF';

const styles = StyleSheet.create({
  container: {
    flex: 2,

  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export {styles, primaryColor, secondaryColor, white};