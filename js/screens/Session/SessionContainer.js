
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


import Session from './Session'




class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
  };

  render() {
    const { navigation } = this.props;
    const session = navigation.getParam('session', {});
    const speaker = navigation.getParam('speaker', {})
    return (
      <Session session={session} speaker={speaker} />
    );
  }
}
export default SessionContainer