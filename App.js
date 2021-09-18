import * as React from 'react';
import Constants from 'expo-constants';
import { store, persistor } from './src/store';
import { Provider } from 'react-redux';
import { Card } from 'react-native-paper';
import WeatherList from './src/weather/WeatherList';
// import { PersistGate } from 'redux-persist/integration/react';

// <PersistGate persistor={persistor}>

export default function App() {
  return (
      <Provider store={store}>
        <WeatherList />
      </Provider>
  );
}
