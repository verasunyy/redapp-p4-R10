import React from 'react';
import { Text, SectionList } from 'react-native';
import Session from '../Session/Session';
import moment from 'moment';
moment().format();
const SessionsList = ({ sessions }) => (<SectionList
  renderItem={({ item }) => <Session item={item} />}
  renderSectionHeader={({ section: { title } }) => (
    <Text style={{ fontWeight: 'bold' }}>{moment(title).format('LT')}</Text>
  )}
  sections={sessions}
  keyExtractor={(item) => item.id + ""}
/>
);

export default SessionsList;
