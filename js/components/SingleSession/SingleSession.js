import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import FavesContext from '../../context/FavesContext';
import styles from './styles'
import PropTypes from 'prop-types';

const SingleSession = ({ item, navigation }) => (
  <FavesContext.Consumer>
    {
      ({ faveIds }) => {

        // const isFaved = !!faveIds.find((id) => (id === item.id))
        return (
          <TouchableOpacity onPress={() => {
            navigation.navigate('Session', {
              sessionId: item.id
            })
          }} activeOpacity={0.5}
            style={styles.container}>
            <Text style={styles.title}>{item.title} </Text>
            <View style={styles.faveContainer}>
              <Text style={styles.location}>{item.location}</Text>
              {(faveIds.includes(item.id)) ? <Icon name="heart" size={12} color="#cf392a" /> : null}
            </View>

          </TouchableOpacity>
        )
      }

    }
  </FavesContext.Consumer>
)

SingleSession.protoTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
  navigation: PropTypes.object.isRequired
}


export default withNavigation(SingleSession);
