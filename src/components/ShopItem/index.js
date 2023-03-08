import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const DEAFULT_IMAGE = ''; // ADD IMAGE PLACEHOLDER

const ShopItem = ({ business }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Shop', { id: business.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.shopContainer}>
      <Image
        // source={{uri: business.image.startsWith('http') ? business.image : DEFAULT_IMAGE}}

        source={{
          uri: business?.image,
        }}
        style={styles.image}
      />
      <View style={styles.main}>
        <View style={styles.text}>
          <Text style={styles.name}>{business?.name}</Text>
          <Text style={styles.desc}>
            
            {business?.description}
          </Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.deliveryTime}>
            {business?.delivery_time_min}-{business?.delivery_time_max}
          </Text>
          <Text style={styles.deliveryTime}>min</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <MaterialIcons name="directions-bike" size={16} color="black" />
        <Text style={styles.info}>Free delivery</Text>
        {/* <Text style={styles.dot}>&#8226;</Text> */}
        {/* <FontAwesome5 name="smile" size={16} color="black" /> */}
        {/* <Text style={styles.info}>{business?.rating?.toFixed(1)}</Text> */}
      </View>
    </Pressable>
  );
};

export default ShopItem;

const styles = StyleSheet.create({
  _shopContainer: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  get shopContainer() {
    return this._shopContainer;
  },
  set shopContainer(value) {
    this._shopContainer = value;
  },
  image: {
    width: '100%',
    aspectRatio: 2.5 / 1,
    marginBottom: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    marginVertical: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 3,
  },
  desc: {
    color: '#666',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  right: {
    marginLeft: 'auto',
    right: 5,
    backgroundColor: '#ececec',

    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 5,
  },
  deliveryTime: {
    color: '#3b9af0',
    fontWeight: '500',
  },
  bottom: {
    borderTopWidth: 0.25,
    borderColor: '#666',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dot: {
    marginHorizontal: 10,
  },
  info: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 5,
  },
});
