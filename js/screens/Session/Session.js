//stateless markup only

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import FavesContext from '../../context/FavesContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import LinearGradient from 'react-native-linear-gradient';

const Session = ({ session, navigation }) => {
  const removeFaveOnPress = (id, removeFaveSession) => {
    removeFaveSession(id);
  }
  const addFavesOnPress = (id, createFaveSession) => {
    createFaveSession(id);
  }
  return (
    <FavesContext.Consumer>
      {
        ({ faveIds, createFaveSession, removeFaveSession }) => (
          <View style={styles.container}>
            <View style={styles.faveContainer}>
              <Text style={styles.location}>{session.location}</Text>
              {faveIds.includes(session.id) ? <Icon name="heart" size={15} color="#cf392a" /> : null}
            </View>
            <Text style={styles.title}>{session.title}</Text>
            <Text style={styles.time}>{moment(session.time).format('LT')}</Text>
            <Text style={styles.text}>{session.description}</Text>
            <Text style={styles.presentedBy}>Presented by: </Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Speaker', {
                speaker: session.speaker
              })
            }} activeOpacity={0.5}
              style={styles.speakerContainer}>
              <Image style={styles.image} source={{ uri: session.speaker.image }} />
              <Text style={styles.speakerName}>{session.speaker.name}</Text>
            </TouchableOpacity>
            <View style={styles.devider} />
            <View style={styles.addFaveContainer}>
              {
                faveIds.includes(session.id) ?
                  <TouchableOpacity
                    onPress={() => removeFaveOnPress(session.id, removeFaveSession)}
                    style={styles.buttonContainer}
                    activeOpacity={0.5}
                  >
                    <LinearGradient
                      colors={['#9963ea', '#8797D6']}
                      start={{ x: 0.0, y: 1.0 }}
                      end={{ x: 1.0, y: 0.0 }}
                      style={[StyleSheet.absoluteFill, styles.button]}
                    />
                    <Text style={styles.buttonText}>Remove From Faves</Text>
                  </TouchableOpacity> :
                  <TouchableOpacity
                    onPress={() => addFavesOnPress(session.id, createFaveSession)}
                    style={styles.buttonContainer}
                    activeOpacity={0.5}
                  >
                    <LinearGradient
                      colors={['#9963ea', '#8797D6']}
                      start={{ x: 0.0, y: 1.0 }}
                      end={{ x: 1.0, y: 0.0 }}
                      style={[StyleSheet.absoluteFill, styles.button]}
                    />
                    <Text style={styles.buttonText}>Add To Faves</Text>
                  </TouchableOpacity>
              }
            </View>
          </View>
        )
      }
    </FavesContext.Consumer>
  )
}

export default withNavigation(Session)