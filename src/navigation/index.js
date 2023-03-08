import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cart from '../screens/Cart';
import HomeScreen from '../screens/HomeScreen';
import Order from '../screens/Order';
import ProductDetails from '../screens/ProductDetails';
import ShopDetails from '../screens/ShopDetails';
import Profile from '../screens/Profile';
import { useAuthContext } from '../context/AuthContext';
import OrderDetailsNavigator from './OrderDetailsNavigator';

import { Foundation, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Address from '../screens/Address';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { dbUser } = useAuthContext();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {dbUser ? (
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      ) : (
        <Stack.Screen name="Profile" component={Profile} />
      )}
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        // component={Address}
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Shops" component={HomeScreen} />
      <HomeStack.Screen
        name="Shop"
        component={ShopDetails}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Product" component={ProductDetails} />
      <HomeStack.Screen name="Cart" component={Cart} />
      
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();

const OrderStackNavigator = () => {

  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="All Orders" component={Order} />
      <OrdersStack.Screen
        name="Order"
        component={OrderDetailsNavigator}
        screenOptions={{ headerShown: false }}
      />
    </OrdersStack.Navigator>
  );
};

const ProfileStack = createNativeStackNavigator()

const ProfileStackNavigator = ()=> {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name='Details' component={Profile} />
      <ProfileStack.Screen name='Edit Address' component={Address} />

    </ProfileStack.Navigator>
  )
}

export default RootNavigator;
