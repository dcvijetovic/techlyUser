import { View, Text, StyleSheet, FlatList } from 'react-native';
import OrderListItem from '../../components/OrderListItem';
import { useOrderContext } from '../../context/OrderContext';

const Order = () => {
  const { orders } = useOrderContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={orders.sort((record1, record2) => {
          return record1.createdAt < record2.createdAt;
        })}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
