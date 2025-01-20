import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import FederatedApp from './FederatedApp';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <SafeAreaView>
      <ErrorBoundary>
        <View
          style={{
            borderColor: 'red',
            borderWidth: 2,
            borderStyle: 'solid',
            padding: 20,
          }}>
          <Text style={{fontSize: 32, color: 'red'}}>Host App</Text>
          <FederatedApp />
        </View>
      </ErrorBoundary>
    </SafeAreaView>
  );
}

export default App;
