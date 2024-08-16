import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import HomeSlider from '../components/HomeSlider';
import CategorySlider from '../components/CategorySlider';
import ProductItem from '../components/ProductItem';
import {useGetMealListingQuery} from '../store/features/meallistingApi';

const HomeScreen = () => {
  const {data: meallistingApi} = useGetMealListingQuery({});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeSlider />
        <CategorySlider />
        {meallistingApi?.result?.items.map((item, i) => {
          return <ProductItem key={i} data={item} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021b17',
  },
});
