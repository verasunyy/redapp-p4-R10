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

const Session = ({ session, speaker, navigation, context }) => {
  return (
    <FavesContext.Consumer>
      {
        ({ faveIds, createFaveSession, removeFaveSession }) => (
          <View>
            {
              console.log(faveIds)}
            <Text>{session.location}</Text>
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

            <View>
              <Button
                onPress={() => createFaveSession(session.id)}
                title="Add To Faves"
                color="#841584"
                accessibilityLabel="Add to Faves"
              />
            </View>
            <View>
              <Button
                onPress={() => removeFaveSession(session.sessionId)}
                title="Remove From Faves"
                color="#841584"
                accessibilityLabel="Remove From Faves"
              />
            </View>
          </View>

        )
      }


    </FavesContext.Consumer>
  )
}

export default withNavigation(Session)