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

import { typography } from '../../config/styles'
import Map from './Map'


class MapContainer extends Component {
  static navigationOptions = {
    title: 'Map',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 22,
      fontFamily: typography.fontMain,
    },
  };
  render() {

    return (
      <Map />
    );
  }
}
export default MapContainer