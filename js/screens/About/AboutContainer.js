//stateful logic and state
import React, { Component, Fragment } from 'react';
import Loader from '../../components/Loader';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { gql } from "apollo-boost";
import { Query } from 'react-apollo';
import About from './About'

const GET_All_CONDUCTS = gql`
  {
    allConducts{
      id
      title
      description
    }
  }
`;

class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    console.log(this.props)
    return (
      <Query query={GET_All_CONDUCTS}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          console.log(data.allConducts)
          return (<About allConducts={data.allConducts} />);
        }}
      </Query >
    );
  }
}
export default AboutContainer