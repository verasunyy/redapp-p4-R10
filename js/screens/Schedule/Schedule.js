//stateless markup only

import React from 'react';
import {
  Text,
  SectionList
} from 'react-native';
import { formatSessionData } from '../../lib/helper'
import SessionsList from '../../components/SessonList/SessionList';


const Schedule = ({ allSessions }) => {
  const sortedSessions = formatSessionData(allSessions);
  return (
    <SessionsList sessions={sortedSessions} />
  )
}
export default Schedule