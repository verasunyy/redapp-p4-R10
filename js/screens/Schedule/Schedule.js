//stateless markup only
import React from 'react';
import { formatSessionData } from '../../lib/helper'
import SessionsList from '../../components/SessonList/SessionList';
import PropTypes from 'prop-types';

const Schedule = ({ allSessions }) => {
  const sortedSessions = formatSessionData(allSessions);
  return (
    <SessionsList sessions={sortedSessions} />
  )
}

Schedule.protoTypes = {
  allSessions: PropTypes.Object
}
export default Schedule