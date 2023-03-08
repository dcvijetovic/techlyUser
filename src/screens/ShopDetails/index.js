import { useNavigation, useRoute } from '@react-navigation/native';
import {
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from './Header';
import ProductListItem from '../../components/ProductListItem';
import styles from './styles';
import { useEffect, useState } from 'react';
import { Business, Product } from '../../models';
import { DataStore } from 'aws-amplify';
import { useCartContext } from '../../context/CartContext';

const ShopDetails = () => {
  const [business, setBusiness] = useState(null);
  const [products, setProducts] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;

  const { setBusiness: setCartBusiness, shoppingSession, cartItems } = useCartContext();

  useEffect(() => {
    if (!id) {
      return;
    }
    setCartBusiness(null);

    DataStore.query(Business, id).then(setBusiness);

    DataStore.query(Product, (product) => product.businessID('eq', id)).then(
      setProducts
    );
  }, [id]); 

  useEffect(() => {
    setCartBusiness(business);
  }, [business]);

  if (!business) {
    return <ActivityIndicator size={'large'} color="gray" />;
  }

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header business={business} />}
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={50}
        color="blue"
        style={styles.imageIcon}
      />
      {shoppingSession && (
        <Pressable
          onPress={() => navigation.navigate('Cart')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Open Cart &#8226; {cartItems.length}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default ShopDetails;
