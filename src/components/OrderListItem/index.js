import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import moment from 'moment'

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Order', { id: order?.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: order?.Business?.image }} style={styles.image} />
      <View>
        <Text style={styles.name}>{order?.Business?.name}</Text>
        <Text style={styles.price}>${order?.total.toFixed(2)} &#8226; {order?.order_status} </Text>
        <Text>{(moment(order?.createdAt).format('LLL'))}  </Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  price: {
    marginVertical: 5,
  },
});
