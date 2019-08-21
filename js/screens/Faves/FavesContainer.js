//stateful logic and state
import React, { Component, Fragment } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import Faves from './Faves'


class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves',
  };
  render() {

    return (
      <Faves />
    );
  }
}
export default FavesContainer