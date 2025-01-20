import React from 'react';
import {Text, View} from 'react-native';

function App() {
  return (
    <View
      style={{
        borderColor: 'blue',
        borderWidth: 2,
        borderStyle: 'solid',
        padding: 20,
      }}>
      <Text style={{fontSize: 32, color: 'blue'}}>Federated App</Text>
    </View>
  );
}

export default App;
