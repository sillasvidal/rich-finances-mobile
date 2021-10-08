import React, { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './global/styles/theme';

import SplashScreen from 'react-native-splash-screen';
import Dashboard from './pages/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Transactions from './pages/Transactions';

import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const App = () => {  
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="Principal"
          screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Principal') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Transações') {
                iconName = focused ? 'align-left' : 'align-left';
              }
  
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: '#438AFE',
            tabBarInactiveTintColor: '#BBBBBB',
            tabBarActiveBackgroundColor: '#3D3D3D',
            tabBarInactiveBackgroundColor: '#3D3D3D',
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: { fontSize: 16},
          })}
        >
          <Tab.Screen name="Principal" component={Dashboard} />
          <Tab.Screen name="Transações" component={Transactions} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
