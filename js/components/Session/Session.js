import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import FavesContext from '../../context/FavesContext';
const Session = ({ item, navigation }) => (
  <FavesContext.Consumer>
    {
      ({ faveIds }) => {
        // console.log(faveIds)
        const isFaved = !!faveIds.faveIds.find((id) => (id === item.id))
        // console.log("isfaved", isFaved);
        return (
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
              },
              isFaved: isFaved

            })
          }} activeOpacity={0.5} >
            <View>
              <Text>{item.title} </Text>
              {(isFaved) ? <Icon name="heart" size={30} color="#900" /> : null}
              <Text>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )
      }

    }
  </FavesContext.Consumer>
)


export default withNavigation(Session);
