import { View, Text, StyleSheet } from 'react-native';

const ProductItem = ({ cartItems }) => {

  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{cartItems?.quantity}</Text>
      </View>
      <Text style={styles.name}>{cartItems?.Product?.name}</Text>
      <Text style={styles.price}>${cartItems?.Product?.price}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  name: {
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  quantityContainer: {
    backgroundColor: '#d6d6d6',
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginRight: 15,
    borderRadius: 3,
  },
  price: {
    marginLeft: 'auto',
  },
});
