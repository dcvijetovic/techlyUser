import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Auth, DataStore } from 'aws-amplify';
import { User } from '../../models';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import Address from '../Address';

const Profile = () => {
  const { dbUser, phone, sub, setDbUser } = useAuthContext();

  const [firstName, setFirstName] = useState(dbUser?.first_name || '');
  const [lastName, setLastName] = useState(dbUser?.last_name || '');

  const navigation = useNavigation();

  const onSave = async () => {
    if (dbUser) {
      await updateUser();
    } else {
      await createUser();
    }
    navigation.goBack();
  };

  const updateUser = async () => {
    const user = await DataStore.save(
      User.copyOf(dbUser, (updated) => {
        updated.first_name = firstName;
        updated.last_name = lastName;
      })
    );
    setDbUser(user);
  };

  const createUser = async () => {
    try {
      const user = await DataStore.save(
        new User({
          firstName,
          lastName,
          phone: phone,
          address: '',
          lat: '',
          lng: '',
          sub,
        })
      );
      setDbUser(user);
    } catch (err) {
      Alert.alert('Error', e.message);
    }
  };

  return (
    <View>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
        style={styles.input}
      />
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
        style={styles.input}
      />
      
      <Text>Phone: {phone}</Text>
      <Text>Address: {dbUser?.address}</Text>

      <View>
        <Button
          title="Edit Address"
          onPress={() => navigation.navigate('Edit Address')}
        />
      </View>
      <Button onPress={onSave} title="Save" />
      <Button onPress={() => Auth.signOut()} title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
});

export default Profile;
