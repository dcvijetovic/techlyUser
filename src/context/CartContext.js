import { DataStore } from 'aws-amplify';
import { createContext, useContext, useEffect, useState } from 'react';
import { ShoppingSession, CartItem } from '../models';
import { useAuthContext } from './AuthContext';

const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();

  const [business, setBusiness] = useState(null);
  const [shoppingSession, setShoppingSession] = useState(null);
  const [cartItems, setCartItems] = useState([]); 

  const totalPrice = cartItems.reduce(
    (sum, cartItem) =>
      (sum + cartItem.quantity * cartItem.Product.price),
    0
  );

  useEffect(() => {
    DataStore.query(ShoppingSession, (s) =>
      s.businessID('eq', business?.id).userID('eq', dbUser?.id)
    ).then((shoppingSessions) => setShoppingSession(shoppingSessions[0]));
  }, [dbUser, business]);

  useEffect(() => {
    if (shoppingSession) {
      DataStore.query(CartItem, (ci) => ci.shoppingsessionID('eq', shoppingSession.id)).then(
        setCartItems
      );
    }
  }, [shoppingSession]);

  const addProductToCart = async (product, quantity) => {
    // get the existing cart or create a new one
    let theCart = shoppingSession || (await createNewCart());

    const newProduct = await DataStore.save(
      new CartItem({ quantity, Product: product, shoppingsessionID: theCart.id })
    );

    setCartItems([...cartItems, newProduct]);
  };

  const createNewCart = async () => {
    const newCart = await DataStore.save(
      new ShoppingSession({ userID: dbUser.id, businessID: business.id })
    );
    setShoppingSession(newCart);
    return newCart;
  };

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        setBusiness,
        business,
        shoppingSession,
        cartItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => useContext(CartContext);
