import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Main } from './src/Main';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/bll/store';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <View style={styles.container}>
        <Main />
      </View>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
