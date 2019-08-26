import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import styles from './styles'
import CodeOfConduct from '../../components/CodeOfConduct'

const About = ({ allConducts }) => {
  return (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../../js/assets/images/r10_logo.png')} />
        </View>
        <Text style={styles.text}>R10 is a conference that focuses on just about any topic related to dev.</Text>
        <Text style={styles.title}>Date & Venue</Text>
        <Text style={styles.text}>The R10 conference will take place on Tuesday, June 29, 2017 in Vancouver, BC</Text>
        <Text style={styles.title}>Conde of Conduct</Text>
        {allConducts.map((conduct) => (
          <CodeOfConduct conduct={conduct} key={conduct.id} />
        ))}
      </View>
    </ScrollView>
  )
}

export default About