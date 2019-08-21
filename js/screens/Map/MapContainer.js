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


import Map from './Map'


class MapContainer extends Component {
  static navigationOptions = {
    title: 'Map',
  };
  render() {

    return (
      <Map />
    );
  }
}
export default MapContainer