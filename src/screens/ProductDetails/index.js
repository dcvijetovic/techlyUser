import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import { Product } from '../../models';
import { useCartContext } from '../../context/CartContext';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;

  const { addProductToCart } = useCartContext();

  useEffect(() => {
    if (id) {
      DataStore.query(Product, id).then(setProduct);
    }
  }, [id]);

  const onAddToCart = async () => {
    await addProductToCart(product, quantity);
    navigation.goBack();
  };

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (product?.price * quantity).toFixed(2);
  };

  if (!product) {
    return <ActivityIndicator size="large" color="gray" />;
  }

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{product?.name}</Text>
      <Text style={styles.description}>{product?.description}</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={35}
          color="black"
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={35}
          color="black"
          onPress={onPlus}
        />
      </View>
      <Pressable onPress={onAddToCart} style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to Cart &#8226; ${getTotal()}
        </Text>
      </Pressable>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#d6d6d6',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    fontWeight: '500',
    marginHorizontal: 20,
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
