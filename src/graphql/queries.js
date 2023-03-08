/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrderItems = /* GraphQL */ `
  query GetOrderItems($id: ID!) {
    getOrderItems(id: $id) {
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
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrderItems = /* GraphQL */ `
  query SyncOrderItems(
    $filter: ModelOrderItemsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getShoppingSession = /* GraphQL */ `
  query GetShoppingSession($id: ID!) {
    getShoppingSession(id: $id) {
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
export const listShoppingSessions = /* GraphQL */ `
  query ListShoppingSessions(
    $filter: ModelShoppingSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShoppingSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        CartItems {
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
      nextToken
      startedAt
    }
  }
`;
export const syncShoppingSessions = /* GraphQL */ `
  query SyncShoppingSessions(
    $filter: ModelShoppingSessionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShoppingSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        CartItems {
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
      nextToken
      startedAt
    }
  }
`;
export const getCartItem = /* GraphQL */ `
  query GetCartItem($id: ID!) {
    getCartItem(id: $id) {
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
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCartItems = /* GraphQL */ `
  query SyncCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCartItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCourier = /* GraphQL */ `
  query GetCourier($id: ID!) {
    getCourier(id: $id) {
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
export const listCouriers = /* GraphQL */ `
  query ListCouriers(
    $filter: ModelCourierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCouriers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCouriers = /* GraphQL */ `
  query SyncCouriers(
    $filter: ModelCourierFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCouriers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          available
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        OrderItems {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          available
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        OrderItems {
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
      nextToken
      startedAt
    }
  }
`;
export const getDeliveryFee = /* GraphQL */ `
  query GetDeliveryFee($id: ID!) {
    getDeliveryFee(id: $id) {
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
export const listDeliveryFees = /* GraphQL */ `
  query ListDeliveryFees(
    $filter: ModelDeliveryFeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeliveryFees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDeliveryFees = /* GraphQL */ `
  query SyncDeliveryFees(
    $filter: ModelDeliveryFeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDeliveryFees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getServiceFee = /* GraphQL */ `
  query GetServiceFee($id: ID!) {
    getServiceFee(id: $id) {
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
export const listServiceFees = /* GraphQL */ `
  query ListServiceFees(
    $filter: ModelServiceFeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceFees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncServiceFees = /* GraphQL */ `
  query SyncServiceFees(
    $filter: ModelServiceFeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServiceFees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
          startedAt
        }
        Orders {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          nextToken
          startedAt
        }
        Orders {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
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
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBusinesses = /* GraphQL */ `
  query SyncBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusinesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
