import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,
    borderBottomColor: '#666',
    borderBottomWidth: 0.25,
    paddingBottom: 10,
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
    aspectRatio: 4 / 3,
  },
  deliveryContainer: {
    position: 'absolute',
    borderRadius: 5,
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    bottom: 10,
    left: 10,
  },
  deliveryText: {
    color: 'white',
    opacity: 1,
  },
  name: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  desc: {
    fontSize: 15,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    marginHorizontal: 5,
  },
  info: {
    fontSize: 15,
    marginLeft: 15,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
    margin: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});
