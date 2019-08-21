//stateless markup only

import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

import styles from './styles';
import { withNavigation } from 'react-navigation';

const Speaker = ({ speaker, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      {/* <View style={styles.background}> */}
      <TouchableOpacity onPress={() => {
        navigation.goBack()
      }} activeOpacity={0.5} ><Text style={styles.exit}>X</Text></TouchableOpacity>

      <Text style={styles.title}>About The Speaker</Text>
      <View style={styles.background}>
        <Image style={styles.image} source={{ uri: speaker.image }} />
        <Text>{speaker.name}</Text>
        <Text>{speaker.bio}</Text>
        {/* <Button></Button> */}
      </View>
      {/* </View> */}
    </SafeAreaView>
  )
}

export default withNavigation(Speaker)