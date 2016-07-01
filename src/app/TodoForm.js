import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

export const TodoForm = (props) => (
  <View style={styles.form}>
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.handleChange}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={props.handlePress}>
      <Text style={styles.buttonText}>make</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 24
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})
