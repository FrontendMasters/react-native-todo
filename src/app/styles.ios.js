import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 40
  },
  box: {
    backgroundColor: 'orange',
    width: width / 2,
    height: height / 3,
    position: 'absolute',
    top: 20,
    left: 30,
    borderRadius: 30
  },
  text: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold'
  }
});
