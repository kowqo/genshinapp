import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import TabNavigator from './TabNavigator';
import { createStackNavigator } from '@react-navigation/stack';

export default () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer fallback={<ActivityIndicator />}>
      <Stack.Navigator
        initialRouteName={'TabNavigator'}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
