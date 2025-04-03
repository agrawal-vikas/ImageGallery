/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import NavigationContainerComponent from './NavigationContainer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <NavigationContainerComponent />
    </SafeAreaProvider>
  );
}

export default App;
