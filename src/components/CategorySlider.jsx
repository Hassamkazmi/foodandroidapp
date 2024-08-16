import {View, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useGetMealcategoryQuery} from '../store/features/mealcategoryApi';
const {height, width} = Dimensions.get('window');
export default function CategorySlider() {
  const {data: mealcategoryApi} = useGetMealcategoryQuery();

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          height: height / 20 + 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={mealcategoryApi?.result?.items}
          showsHorizontalScrollIndicator={false}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          horizontal
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: width - 200,
                  height: height / 20 + 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  disabled={true}
                  style={{
                    width: '90%',
                    height: '90%',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 20, color: '#242323', fontWeight: '700'}}>
                    {item?.Name}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {mealcategoryApi?.result?.items.map((item, index) => {
          return (
            <View
              style={{
                width: currentIndex == index ? 50 : 8,
                height: currentIndex == index ? 10 : 8,
                borderRadius: currentIndex == index ? 5 : 4,
                backgroundColor: currentIndex == index ? 'green' : 'gray',
                marginLeft: 5,
              }}></View>
          );
        })}
      </View>
    </View>
  );
}
