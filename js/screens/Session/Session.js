//stateless markup only

import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import FavesContext from '../../context/FavesContext';
import Icon from 'react-native-vector-icons/FontAwesome';



const Session = ({ session, speaker, navigation, isFaved }) => {
  const removeFaveOnPress = (id, removeFaveSession) => {
    removeFaveSession(id);
    isFaved = false;
  }
  const addFavesOnPress = (id, createFaveSession) => {
    createFaveSession(id);
    isFaved = true;
  }
  return (
    <FavesContext.Consumer>
      {
        ({ createFaveSession, removeFaveSession }) => (
          <View>
            {/* {console.log(isFaved)} */}
            <Text>{session.location}</Text>
            {(isFaved) ? <Icon name="heart" size={30} color="#900" /> : null}
            <Text>{session.title}</Text>
            <Text>{session.time}</Text>
            <Text>{session.description}</Text>
            <Text>Presented by: </Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Speaker', {
                speaker: speaker
              })
            }} activeOpacity={0.5} >
              <View>
                <Image style={styles.image} source={{ uri: speaker.image }} />
                <Text>{speaker.name}</Text>
              </View>
            </TouchableOpacity>

            {
              (isFaved) ? <View>
                <Button
                  onPress={() => removeFaveOnPress(session.id, removeFaveSession)}
                  title="Remove From Faves"
                  color="#841584"
                  accessibilityLabel="Remove From Faves"
                />
              </View> : <View>
                  <Button
                    onPress={() => addFavesOnPress(session.id, createFaveSession)}
                    title="Add To Faves"
                    color="#841584"
                    accessibilityLabel="Add to Faves"
                  />
                </View>
            }


          </View>

        )
      }


    </FavesContext.Consumer>
  )
}

export default withNavigation(Session)