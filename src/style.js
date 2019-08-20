import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#999',
  },
  signature: {
    width: 400,
    backgroundColor: '#fff',
  },
  buttons: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
});
