import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';

import { styles } from './styles';
export class Fancy extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.box}>
          
        </View>
        <Text style={styles.text}>Fancy</Text>
      </View>
    )
  }
}
