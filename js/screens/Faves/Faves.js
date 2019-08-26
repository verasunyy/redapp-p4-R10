//stateless markup only

import React from 'react';
import {
  Text,
} from 'react-native';
import { formatSessionData } from '../../lib/helper'
import SessionsList from '../../components/SessonList/SessionList';
import PropTypes from 'prop-types';

const Faves = ({ allFavedSessions }) => {
  if (!!allFavedSessions) {
    const sortedSessions = formatSessionData(allFavedSessions);
    return (
      <SessionsList sessions={sortedSessions} />
    )
  }
  else {
    return <Text>No Faved Session</Text>
  }
}
Faves.protoTypes = {
  allFavedSessions: PropTypes.object.isRequired
}
export default Faves