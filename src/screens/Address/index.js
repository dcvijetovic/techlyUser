import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Button,
  ScrollView,
  VirtualizedList,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useState } from 'react';
import { useEffect } from 'react';
import { User } from '../../models';
import { useAuthContext } from '../../context/AuthContext';
import { DataStore } from 'aws-amplify';

const Address = () => {
  const { dbUser, setDbUser } = useAuthContext();

  const [address, setAddress] = useState(dbUser?.address || '');
  const [addressDetails, setAddresDetails] = useState(
    dbUser?.address_details || ''
  );
  const [lat, setLat] = useState(dbUser?.lat || '');
  const [lng, setLng] = useState(dbUser?.lng || '');

  function handleSubmit() {
    updateUser();
  }

  const updateUser = async () => {
    const user = await DataStore.save(
      User.copyOf(dbUser, (updated) => {
        updated.address = address;
        updated.lat = lat;
        updated.lng = lng;
        updated.address_details = addressDetails;
      })
    );
    setDbUser(user);
  };

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <SafeAreaView style={{ width: '100%' }}>
        <View style={{ flex: 1, width: '100%', position: 'absolute', zIndex: 100 }}>
          <ScrollView nestedScrollEnabled={true} style={{ flex: 1, position: 'absolute', width: '100%' }}>
            <GooglePlacesAutocomplete
              placeholder={address}
              onPress={(data, details = null) => {
                setAddress(details.formatted_address);
                setLat(details.geometry.location.lat);
                setLng(details.geometry.location.lng);
              }}
              query={{
                key: 'AIzaSyAM_2sQVTSb-HP_CkFpRL5Nv6p_6eQTKKs',
                language: 'en',
              }}
              fetchDetails={true}
            />
          </ScrollView>
        </View>
        <View style={{ display: 'flex', marginTop: 10 }}>
          <TextInput
            value={addressDetails}
            onChangeText={setAddresDetails}
            placeholder="Address Details"
            style={styles.input}
          />
        </View>

        <View>
          <Button
            title="Save address"
            onPress={handleSubmit}
            style={styles.button}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 0,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 2,
    marginTop: 20,
  },
});

export default Address;
