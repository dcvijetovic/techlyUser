import { DataStore } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ShopItem from '../../components/ShopItem';
import { Business } from '../../models';

const HomeScreen = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    DataStore.query(Business).then(setBusinesses);
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={businesses}
        renderItem={({ item }) => <ShopItem business={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
    backgroundColor: '#fafafa',
  },
});
