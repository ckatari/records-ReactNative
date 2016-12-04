// index.android.js - place in here for Android!!!


// Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a Component
const App = () => (
    <Text>Some Text</Text>
  );

// Render it to the device
AppRegistry.registerComponent('records', () => App);
