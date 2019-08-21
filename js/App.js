/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { ApolloProvider } from '@apollo/react-hooks'
import client from './config/api'

import RootStackNavigator from './navigation/RootStackNavigator'
import { FavesProvider } from './context/FavesContext'
class App extends React.Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}




export default App;
