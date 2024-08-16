import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import TabButton from './src/components/TabButton';
import LogoTitle from './src/components/Header'; 
import { store } from './src/store/store'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={TabButton} 
            options={{
              headerTitle: () => <LogoTitle />,
              headerStyle: {
                backgroundColor: '#021b17', 
              },
              headerTitleAlign: 'center',
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
