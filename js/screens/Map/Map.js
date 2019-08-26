//stateless markup only

import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';
const Map = ({ allConducts }) => {
  return (
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: 49.263489,
        longitude: -123.131348,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }}
    >
      <MapView.Marker
        coordinate={{
          latitude: 49.263489,
          longitude: -123.131348
        }}
        image={require('../../assets/images/map_pin.png')}
      />
    </MapView>
  )
}

export default Map