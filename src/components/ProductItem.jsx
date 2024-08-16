import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProductItem = () => {
  return (
    <View style={styles.container}>
      <Text>ProductItem</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 500,
  },
});
