import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
const Session = ({ item, navigation }) => (
  <TouchableOpacity onPress={() => {
    navigation.navigate('Session', {
      session: {
        id: item.id,
        location: item.location,
        title: item.title,
        time: moment(item.startTime).format('LT'),
        description: item.description,
      },
      speaker: {
        id: item.speaker.id,
        image: item.speaker.image,
        name: item.speaker.name,
        bio: item.speaker.bio,
        url: item.speaker.url
      }

    })
  }} activeOpacity={0.5} >
    <View>
      <Text>{item.title} </Text>
      <Text>{item.location}</Text>
    </View>
  </TouchableOpacity>
);

export default withNavigation(Session);
