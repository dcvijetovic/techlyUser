import { DataStore } from 'aws-amplify';
import { createContext, useContext, useEffect, useState } from 'react';
import { Order, OrderItems } from '../models';
import { useAuthContext } from './AuthContext';
import { useCartContext } from './CartContext';

const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();
  const { business, totalPrice, cartItems } = useCartContext();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    DataStore.query(Order, (o) => o.userID('eq', dbUser?.id)).then(setOrders);
  }, [dbUser]);

  const createOrder = async () => {
    const newOrder = await DataStore.save(
      new Order({
        userID: dbUser.id,
        Business: business,
        order_status: 'NEW',
        total: totalPrice,
        user_notes: 'none',
      })
    );

    await Promise.all(
      cartItems.map((cartItem) =>
        DataStore.save(
          new OrderItems({
            quantity: cartItem.quantity,
            orderID: newOrder.id,
            Product: cartItem.Product,
          })
        )
      )
    );

    // delete shopping session
    // moved to cart

    setOrders([...orders, newOrder]);
  };

  const getOrder = async (id) => {
    const order = await DataStore.query(Order, id);
    const orderItems = await DataStore.query(OrderItems, (oi) =>
      oi.orderID('eq', id)
    );

    return { ...order, products: orderItems };
  };

  return (
    <OrderContext.Provider value={{ createOrder, orders, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);
