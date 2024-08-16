import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ReferScreen from '../screens/ReferScreen';
import CartScreen from '../screens/CartScreen';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const TabButton = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: '#4CA02C'},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#fff',
        headerStyle: {backgroundColor: '#021b17'},
        headerTintColor: 'white',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: '#FF5733'},
          headerTintColor: 'white',
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="home"
              color={focused ? '#fff' : '#fff'}
              style={focused ? styles.middleIcon : styles.label}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Refer"
        component={ReferScreen}
        options={{
          headerStyle: {backgroundColor: '#8e44ad'},
          headerTintColor: 'white',
          tabBarIcon: ({focused}) => (
            <AntDesign name="sharealt" color={focused ? '#fff' : '#fff'} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerStyle: {backgroundColor: '#f39c12'},
          headerTintColor: 'white',
          tabBarIcon: ({focused}) => (
            <AntDesign name="shoppingcart" color={focused ? '#fff' : '#fff'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {backgroundColor: '#3498db'},
          headerTintColor: 'white',
          tabBarIcon: ({focused}) => (
            <AntDesign name="user" color={focused ? '#fff' : '#fff'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabButton;
const styles = StyleSheet.create({
  label: {
    textTransform: 'capitalize',
    fontSize: 14,
    color: '#fff',
  },
  middleIcon: {},
});
