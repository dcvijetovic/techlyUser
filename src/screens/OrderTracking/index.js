import { DataStore } from 'aws-amplify';
import { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ShoppingSession, Courier } from '../../models';
import { FontAwsome5 } from '@expo/vector-icons';
import { useOrderContext } from '../../context/OrderContext';

const OrderTracking = ({ id }) => {
  const [order, setOrder] = useState();
  const [courier, setCourier] = useState(null);
  const { getOrder } = useOrderContext();

  const mapRef = useRef(null);

  // useEffect(() => {
  //   DataStore.query(ShoppingSession, id).then(setOrder);
  // }, []);

  useEffect(() => {
    getOrder(id).then(setOrder);
  }, []);

  useEffect(() => {
    if (!order) {
      return;
    }
    const subscription = DataStore.observe(
      ShoppingSession,
      order?.id
    ).subscribe((msg) => {
      if (msg.opType === 'UPDATE') {
        setOrder(msg.element);
      }
    });

    return () => subscription.unsubscribe();
  }, [order]);

  useEffect(() => {
    if (order?.orderCourierId) {
      DataStore.query(Courier, order?.orderCourierId).then(setCourier);
    }
  }, [order?.orderCourierId]);

  useEffect(() => {
    if (courier?.lat && courier?.lng) {
      mapRef.current.animateToRegion({
        latitude: courier?.lat,
        longitude: courier?.lng,
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
      });
    }
  }, [courier?.lat, courier?.lng]);

  useEffect(() => {
    if (courier) {
      return;
    }
    const subscription = DataStore.observe(Courier, courier?.id).subscribe(
      (msg) => {
        if (msg.opType === 'UPDATE') {
          setCourier(msg.element);
        }
      }
    );
    return () => subscription.unsubscribe();
  }, [courier]);

  return (
    <View>
      <Text style={styles.status}>
        Status: {order?.order_status || 'loading'}
      </Text>

      <MapView style={styles.map} ref={mapRef} showsUserLocation>
        {/* or add user address as marker house icon */}
        {courier?.lat && (
          <Marker
            coordinate={{ latitude: courier.lat, longitude: courier.lng }}
          >
            <View style={{ backgroundColor: 'white', borderRadius: 50 }}>
              {/* <FontAwsome5 name='motorcycle' size={24} color='black' /> */}
              <Text>Courier</Text>
            </View>
          </Marker>
        )}
      </MapView>
    </View>
  );
};

export default OrderTracking;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  status: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 5,
  },
});
