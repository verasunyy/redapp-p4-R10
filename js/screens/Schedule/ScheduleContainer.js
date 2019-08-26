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


import Schedule from './Schedule'
import { gql } from "apollo-boost";
import { Query } from 'react-apollo';
import FavesContext from '../../context/FavesContext'
import { typography } from '../../config/styles'

const GET_All_SESSIONS = gql`
  {
    allSessions{
      id
      title
      startTime
      location
      description
      speaker{
        id
        bio
        image
        name
        url
      }
    }
  }
`;

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 22,
      fontFamily: typography.fontMain,
    },
  };

  render() {

    return (
      <Query query={GET_All_SESSIONS}>
        {({ loading, error, data }) => {
          if (loading) return <Text>loading...</Text>;
          if (error) return <Text>{error.message}</Text>;
          // console.log(data.allConducts)
          return (<Schedule allSessions={data.allSessions} />);
        }
        }
      </ Query>

    )
  }
}
export default ScheduleContainer

