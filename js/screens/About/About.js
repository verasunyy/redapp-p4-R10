//stateless markup only

import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import styles from './styles'

const ConductTitle = ({ conductTitle }) => {
  return (
    <Text>{conductTitle}</Text>
  )
}
const ConductDescription = ({ conductDescription }) => {
  return (
    <Text>{conductDescription}</Text>
  )
}

const About = ({ allConducts }) => {
  return (
    <ScrollView keyboardDismissMode="interactive">
      <Image style={styles.image} source={require('../../../js/assets/images/r10_logo.png')} />
      <Text>R10 is a conference that docuses on just about any topic related to dev.</Text>
      <Text>Date & Venue</Text>
      <Text>The R10 conference will take place on Tuesday, June 29, 2017 in Vancouver, BC</Text>
      <Text>Conde of Conduct</Text>
      {allConducts.map((conduct) => (
        <View key={conduct.id}>
          <ConductTitle conductTitle={conduct.title} />
          <ConductDescription conductDescription={conduct.description} />
        </View>
      ))}
      <Text>{allConducts[0].title}</Text>
    </ScrollView>
  )
}

export default About