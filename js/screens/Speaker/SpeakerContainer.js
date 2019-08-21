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


import Speaker from './Speaker'


class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam('speaker', {})
    return (
      <Speaker speaker={speaker} />
    );
  }
}
export default SpeakerContainer