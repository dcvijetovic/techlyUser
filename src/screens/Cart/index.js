import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import { useCartContext } from '../../context/CartContext';
import { useAuthContext } from '../../context/AuthContext';
import ProductItem from '../../components/Cart/ProductItem';
import { useOrderContext } from '../../context/OrderContext';
import { useNavigation } from '@react-navigation/native';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { createPaymentIntent } from '../../graphql/mutations';
import { DataStore, API, graphqlOperation } from 'aws-amplify';
import { useStripe } from '@stripe/stripe-react-native';
import { useState } from 'react';
import { useEffect } from 'react';

const Cart = () => {
  const { business, cartItems, totalPrice, shoppingSession } = useCartContext();
  const { createOrder } = useOrderContext();
  const { dbUser } = useAuthContext();
  const navigation = useNavigation();
  const [clientSecret, setClientSecret] = useState(null);

  const amount = Math.floor(totalPrice * 100 || 0);

  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  useEffect(() => {
    fetchPaymentIntent();
  }, []);

  useEffect(() => {
    if (clientSecret) {
      initializePaymentSheet();
    }
  }, [clientSecret]);

  const fetchPaymentIntent = async () => {
    const response = await API.graphql(
      graphqlOperation(createPaymentIntent, { amount })
    );
    setClientSecret(response.data.createPaymentIntent.clientSecret);
  };

  const initializePaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
    });

    if (error) {
      Alert.alert(error);
    }
  };

  const openPaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    const { error } = await presentPaymentSheet({ clientSecret });

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      await onCreateOrder();
      Alert.alert('Success', 'Your payment has been successful!');
    }
  };

  const onCreateOrder = async () => {
    await createOrder();

    await DataStore.delete(shoppingSession);

    navigation.navigate('Shops');
  };

  const onConfirmOrder = () => {
    openPaymentSheet();
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{business?.name}</Text>

      <Text style={styles.locationName}>Pickup location</Text>

      <Text style={styles.address}>
        <Entypo name="location-pin" size={20} color="black" /> Address: (
        {dbUser?.address},{dbUser?.address_details})
      </Text>
      <Text style={styles.locationName}>Store location</Text>

      <Text style={styles.address}>
        <FontAwesome5 name="store" size={16} color="black" />{' '}
        {business?.address}
      </Text>
      <Text style={styles.yourItems}>Your items</Text>

      <FlatList
        data={cartItems}
        renderItem={({ item }) => <ProductItem cartItems={item} />}
      />

      <View style={styles.separator} />
      <Pressable onPress={onConfirmOrder} style={styles.button}>
        <Text style={styles.buttonText}>
          Create Order &#8226; ${totalPrice.toFixed(2)}
        </Text>
      </Pressable>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '600',
    marginVertical: 10,
  },
  address: {
    marginBottom: 10,
  },
  yourItems: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#d6d6d6',
    marginVertical: 10,
  },
  locationName: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 10,
    display: 'flex',
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
