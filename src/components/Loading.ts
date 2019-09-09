import React from 'react';
import { View, StyleSheet } from 'react-native';
import Spinner from './Spinner';
import Text from './Text';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 15,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
});

export default () => (
  <View style={styles.container}>
    <Spinner occupy={false} />
    <View style={styles.innerContainer}>

      <Text style={styles.textStyle}> ReactNative BoilerPlate </Text>
    </View>
  </View>
);
