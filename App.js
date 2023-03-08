import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import { StripeProvider } from '@stripe/stripe-react-native';

import RootNavigator from './src/navigation';
import config from './src/aws-exports';
import AuthContextProvider from './src/context/AuthContext';
import CartContextProvider from './src/context/CartContext';
import OrderContextProvider from './src/context/OrderContext';

Amplify.configure({ ...config, Analytics: { disabled: true } });

function App() {
  return (
    <NavigationContainer>
      <StripeProvider publishableKey='pk_test_51LnkhRGLvk2ePqSaFJsEgOXudUi2KcJOr2phcY061JDV6SBuWU2mBwjlWkuYwGxfoRjysfrHUPuajkHkUFSpoTbk00IJGF95Bx'
      
      >
        <AuthContextProvider>
          <CartContextProvider>
            <OrderContextProvider>
              <RootNavigator />
            </OrderContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </StripeProvider>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
