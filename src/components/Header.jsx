import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const LogoTitle = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#021b17',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});

export default LogoTitle;
