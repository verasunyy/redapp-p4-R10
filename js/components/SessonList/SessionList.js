import React from 'react';
import { View, Text, SectionList } from 'react-native';
import SingleSession from '../SingleSession';
import moment from 'moment';
import styles from './styles'
import PropTypes from 'prop-types';

const SessionsList = ({ sessions }) => (
  <SectionList
    renderItem={({ item }) => <SingleSession item={item} />}
    renderSectionHeader={({ section: { title } }) => (
      <Text style={styles.header}>{moment(title).format('LT')}</Text>
    )}
    sections={sessions}
    keyExtractor={(item) => item.id + ""}
    ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
  />
);

SessionsList.protoTypes = {
  session: PropTypes.shape({
    title: PropTypes.string.isRequired,
  })
}

export default SessionsList;
