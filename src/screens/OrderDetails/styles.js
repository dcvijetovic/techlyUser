import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  imageIcon: {
    position: 'absolute',
    top: 50,
    left: 15,
  },
  container: {
    margin: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  name: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
  },
  info: {
    fontSize: 15,
    color: '#666',
  },
  total: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 15,
    margin: 10,
  },
  yourOrder: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
  address: {
    margin: 10,
  },
});
