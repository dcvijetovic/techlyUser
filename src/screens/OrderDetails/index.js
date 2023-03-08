import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import ProductItem from '../../components/Cart/ProductItem';
import { useOrderContext } from '../../context/OrderContext';
import { useEffect, useState } from 'react';
import moment from 'moment'
import { useAuthContext } from '../../context/AuthContext';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { useCartContext } from '../../context/CartContext';

const Header = ({order}) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: order?.Business?.image }} style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.name}>{order?.Business?.name}</Text>
        <Text style={styles.info}>{order?.order_status} &#8226; {(moment(order?.createdAt).format('LLL'))}</Text>
        <Text style={styles.yourOrder}>Your Order</Text>
      </View>
    </View>
  );
};

const Footer =({order}) => {
  const { dbUser } = useAuthContext();
  const { business } = useCartContext();

  return (
    <View >
      <Text style={styles.total}>Total: ${order?.total?.toFixed(2)}</Text>
      <Text style={styles.address}>
         Your Address: {dbUser?.address}, {dbUser?.address_details}
      </Text>
      
    </View>
  )
}

const OrderDetails = ({id}) => {
  const [order, setOrder] = useState();
  const { getOrder } = useOrderContext();

  useEffect(() => {
    getOrder(id).then(setOrder);
  }, []);

  if (!order) {
    return <ActivityIndicator size={'large'} color="gray" />;
  }

  return (
    <FlatList
      ListHeaderComponent={()=> <Header order={order}/>}
      data={order?.products}
      renderItem={({ item }) => <ProductItem cartItems={item} />}
      ListFooterComponent={()=> <Footer order={order}/>}
    />
  );
};

export default OrderDetails;
