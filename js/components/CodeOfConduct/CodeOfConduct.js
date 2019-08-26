import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class CodeOfConduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false
    };
    this.spinValue = new Animated.Value(0);
  }
  animate = () => {
    this.spinValue.setValue(0)
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();
    console.log(this.state.isExpand);
    this.setState({ isExpand: !this.state.isExpand });
    console.log(this.state.isExpand);
  }

  render() {
    const { conduct } = this.props
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this.animate} style={styles.animateTitle}>
          {this.state.isExpand ?
            <Animated.Text style={[{ transform: [{ rotate: spin }], height: 20, width: 10 },
            styles.animatedSign]}>
              -
            </Animated.Text> :
            <Animated.Text style={[{ transform: [{ rotate: spin }], height: 20, width: 10 },
            styles.animatedSign]}>
              +
            </Animated.Text>
          }
          <Text style={styles.title}>{conduct.title}</Text>
        </TouchableOpacity>
        {
          this.state.isExpand ? <Text style={styles.text}>{conduct.description}</Text> : null
        }
      </View >
    );
  }
}
CodeOfConduct.protoTypes = {
  conduct: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
}
export default CodeOfConduct;