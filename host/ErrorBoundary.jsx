import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false, error: null};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return {hasError: true, error};
  }

  render() {
    const {hasError, error} = this.state;
    const {children} = this.props;
    if (hasError) {
      // Render any custom fallback UI
      return (
        <>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddong: 30,
            }}>
            <Text>{error?.message}</Text>
            <Text style={{marginTop: 20}}>{JSON.stringify(error)}</Text>
          </View>
        </>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
