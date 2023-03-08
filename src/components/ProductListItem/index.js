import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const ProductListItem = ({ product }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Product', { id: product.id })}
      style={styles.container}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{product?.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {product?.description}
        </Text>
        <Text style={styles.price}>$ {product?.price}</Text>
      </View>
      {product.image && (
        <Image source={{ uri: product?.image }} style={styles.image} />
      )}
    </Pressable>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: '#666',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});
