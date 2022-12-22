import React, { FC } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import Navigation from './src/navigation';

const App: FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <Navigation />
    </GestureHandlerRootView>
  );
};

export default App;
