import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen/MainScreen';
import CharList from '../screens/CharList/CharList';
import About from '../screens/About/About';

export default ({ route }) => {
  // console.log(route);
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: true,
      }}
      initialRouteName={'CharList'}>
      <Tab.Screen
        name={'Main'}
        component={MainScreen}
        options={{
          title: 'Main',
        }}
      />
      <Tab.Screen
        name={'CharList'}
        component={CharList}
        options={{
          title: 'CharList',
        }}
      />
      <Tab.Screen name={'About'} component={About} />
    </Tab.Navigator>
  );
};
