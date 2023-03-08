/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount) {
      clientSecret
    }
  }
`;
export const createOrderItems = /* GraphQL */ `
  mutation CreateOrderItems(
    $input: CreateOrderItemsInput!
    $condition: ModelOrderItemsConditionInput
  ) {
    createOrderItems(input: $input, condition: $condition) {
      id
      quantity
      Product {
        id
        name
        description
        image
        SKU
        price
        businessID
        available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderItemsProductId
    }
  }
`;
export const updateOrderItems = /* GraphQL */ `
  mutation UpdateOrderItems(
    $input: UpdateOrderItemsInput!
    $condition: ModelOrderItemsConditionInput
  ) {
    updateOrderItems(input: $input, condition: $condition) {
      id
      quantity
      Product {
        id
        name
        description
        image
        SKU
        price
        businessID
        available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderItemsProductId
    }
  }
`;
export const deleteOrderItems = /* GraphQL */ `
  mutation DeleteOrderItems(
    $input: DeleteOrderItemsInput!
    $condition: ModelOrderItemsConditionInput
  ) {
    deleteOrderItems(input: $input, condition: $condition) {
      id
      quantity
      Product {
        id
        name
        description
        image
        SKU
        price
        businessID
        available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderItemsProductId
    }
  }
`;
export const createShoppingSession = /* GraphQL */ `
  mutation CreateShoppingSession(
    $input: CreateShoppingSessionInput!
    $condition: ModelShoppingSessionConditionInput
  ) {
    createShoppingSession(input: $input, condition: $condition) {
      id
      CartItems {
        items {
          id
          quantity
          shoppingsessionID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartItemProductId
        }
        nextToken
        startedAt
      }
      userID
      businessID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateShoppingSession = /* GraphQL */ `
  mutation UpdateShoppingSession(
    $input: UpdateShoppingSessionInput!
    $condition: ModelShoppingSessionConditionInput
  ) {
    updateShoppingSession(input: $input, condition: $condition) {
      id
      CartItems {
        items {
          id
          quantity
          shoppingsessionID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartItemProductId
        }
        nextToken
        startedAt
      }
      userID
      businessID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteShoppingSession = /* GraphQL */ `
  mutation DeleteShoppingSession(
    $input: DeleteShoppingSessionInput!
    $condition: ModelShoppingSessionConditionInput
  ) {
    deleteShoppingSession(input: $input, condition: $condition) {
      id
      CartItems {
        items {
          id
          quantity
          shoppingsessionID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartItemProductId
        }
        nextToken
        startedAt
      }
      userID
      businessID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
      id
      quantity
      shoppingsessionID
      Product {
        id
        name
        description
        image
        SKU
        price
        businessID
        available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartItemProductId
    }
  }
`;
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
      id
      quantity
      shoppingsessionID
      Product {
        id
        name
        description
        image
        SKU
        price
        businessID
        available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartItemProductId
    }
  }
`;
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
      id
      quantity
      shoppingsessionID
      Product {
        id
        name
        description
        image
        SKU
        price
        businessID
        available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartItemProductId
    }
  }
`;
export const createCourier = /* GraphQL */ `
  mutation CreateCourier(
    $input: CreateCourierInput!
    $condition: ModelCourierConditionInput
  ) {
    createCourier(input: $input, condition: $condition) {
      id
      first_name
      last_name
      sub
      lat
      lng
      available
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCourier = /* GraphQL */ `
  mutation UpdateCourier(
    $input: UpdateCourierInput!
    $condition: ModelCourierConditionInput
  ) {
    updateCourier(input: $input, condition: $condition) {
      id
      first_name
      last_name
      sub
      lat
      lng
      available
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCourier = /* GraphQL */ `
  mutation DeleteCourier(
    $input: DeleteCourierInput!
    $condition: ModelCourierConditionInput
  ) {
    deleteCourier(input: $input, condition: $condition) {
      id
      first_name
      last_name
      sub
      lat
      lng
      available
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      total
      user_notes
      order_status
      payment_status
      userID
      Business {
        id
        name
        company
        address
        lat
        lng
        image
        adminSub
        phone
        email
        website
        description
        business_hours
        delivery_time_min
        delivery_time_max
        Products {
          nextToken
          startedAt
        }
        ShoppingSessions {
          nextToken
          startedAt
        }
        available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      OrderItems {
        items {
          id
          quantity
          orderID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderItemsProductId
        }
        nextToken
        startedAt
      }
      Courier {
        id
        first_name
        last_name
        sub
        lat
        lng
        available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderBusinessId
      orderCourierId
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      total
      user_notes
      order_status
      payment_status
      userID
      Business {
        id
        name
        company
        address
        lat
        lng
        image
        adminSub
        phone
        email
        website
        description
        business_hours
        delivery_time_min
        delivery_time_max
        Products {
          nextToken
          startedAt
        }
        ShoppingSessions {
          nextToken
          startedAt
        }
        available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      OrderItems {
        items {
          id
          quantity
          orderID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderItemsProductId
        }
        nextToken
        startedAt
      }
      Courier {
        id
        first_name
        last_name
        sub
        lat
        lng
        available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderBusinessId
      orderCourierId
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      total
      user_notes
      order_status
      payment_status
      userID
      Business {
        id
        name
        company
        address
        lat
        lng
        image
        adminSub
        phone
        email
        website
        description
        business_hours
        delivery_time_min
        delivery_time_max
        Products {
          nextToken
          startedAt
        }
        ShoppingSessions {
          nextToken
          startedAt
        }
        available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      OrderItems {
        items {
          id
          quantity
          orderID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderItemsProductId
        }
        nextToken
        startedAt
      }
      Courier {
        id
        first_name
        last_name
        sub
        lat
        lng
        available
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderBusinessId
      orderCourierId
    }
  }
`;
export const createDeliveryFee = /* GraphQL */ `
  mutation CreateDeliveryFee(
    $input: CreateDeliveryFeeInput!
    $condition: ModelDeliveryFeeConditionInput
  ) {
    createDeliveryFee(input: $input, condition: $condition) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDeliveryFee = /* GraphQL */ `
  mutation UpdateDeliveryFee(
    $input: UpdateDeliveryFeeInput!
    $condition: ModelDeliveryFeeConditionInput
  ) {
    updateDeliveryFee(input: $input, condition: $condition) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDeliveryFee = /* GraphQL */ `
  mutation DeleteDeliveryFee(
    $input: DeleteDeliveryFeeInput!
    $condition: ModelDeliveryFeeConditionInput
  ) {
    deleteDeliveryFee(input: $input, condition: $condition) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createServiceFee = /* GraphQL */ `
  mutation CreateServiceFee(
    $input: CreateServiceFeeInput!
    $condition: ModelServiceFeeConditionInput
  ) {
    createServiceFee(input: $input, condition: $condition) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateServiceFee = /* GraphQL */ `
  mutation UpdateServiceFee(
    $input: UpdateServiceFeeInput!
    $condition: ModelServiceFeeConditionInput
  ) {
    updateServiceFee(input: $input, condition: $condition) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteServiceFee = /* GraphQL */ `
  mutation DeleteServiceFee(
    $input: DeleteServiceFeeInput!
    $condition: ModelServiceFeeConditionInput
  ) {
    deleteServiceFee(input: $input, condition: $condition) {
      id
      name
      price
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      description
      image
      SKU
      price
      businessID
      available
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      description
      image
      SKU
      price
      businessID
      available
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      description
      image
      SKU
      price
      businessID
      available
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      first_name
      last_name
      phone
      sub
      address
      lat
      lng
      address_details
      courier_notes
      ShoppingSessions {
        items {
          id
          userID
          businessID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Orders {
        items {
          id
          total
          user_notes
          order_status
          payment_status
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderBusinessId
          orderCourierId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      first_name
      last_name
      phone
      sub
      address
      lat
      lng
      address_details
      courier_notes
      ShoppingSessions {
        items {
          id
          userID
          businessID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Orders {
        items {
          id
          total
          user_notes
          order_status
          payment_status
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderBusinessId
          orderCourierId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      first_name
      last_name
      phone
      sub
      address
      lat
      lng
      address_details
      courier_notes
      ShoppingSessions {
        items {
          id
          userID
          businessID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Orders {
        items {
          id
          total
          user_notes
          order_status
          payment_status
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderBusinessId
          orderCourierId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
      id
      name
      company
      address
      lat
      lng
      image
      adminSub
      phone
      email
      website
      description
      business_hours
      delivery_time_min
      delivery_time_max
      Products {
        items {
          id
          name
          description
          image
          SKU
          price
          businessID
          available
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ShoppingSessions {
        items {
          id
          userID
          businessID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      available
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
      id
      name
      company
      address
      lat
      lng
      image
      adminSub
      phone
      email
      website
      description
      business_hours
      delivery_time_min
      delivery_time_max
      Products {
        items {
          id
          name
          description
          image
          SKU
          price
          businessID
          available
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ShoppingSessions {
        items {
          id
          userID
          businessID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      available
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
      id
      name
      company
      address
      lat
      lng
      image
      adminSub
      phone
      email
      website
      description
      business_hours
      delivery_time_min
      delivery_time_max
      Products {
        items {
          id
          name
          description
          image
          SKU
          price
          businessID
          available
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ShoppingSessions {
        items {
          id
          userID
          businessID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      available
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
