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
import { formatSessionData } from '../../lib/helper'
import SessionsList from '../../components/SessonList/SessionList';


const Faves = ({ allFavedSessions }) => {
  console.log('favedData', allFavedSessions)
  if (!!allFavedSessions) {
    const sortedSessions = formatSessionData(allFavedSessions);
    console.log('faved true')
    return (
      <SessionsList sessions={sortedSessions} />
    )
  }
  else {
    return <Text>No Faved Session</Text>
  }


}

export default Faves