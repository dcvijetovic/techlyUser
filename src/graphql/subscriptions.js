/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrderItems = /* GraphQL */ `
  subscription OnCreateOrderItems {
    onCreateOrderItems {
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
export const onUpdateOrderItems = /* GraphQL */ `
  subscription OnUpdateOrderItems {
    onUpdateOrderItems {
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
export const onDeleteOrderItems = /* GraphQL */ `
  subscription OnDeleteOrderItems {
    onDeleteOrderItems {
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
export const onCreateShoppingSession = /* GraphQL */ `
  subscription OnCreateShoppingSession {
    onCreateShoppingSession {
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
export const onUpdateShoppingSession = /* GraphQL */ `
  subscription OnUpdateShoppingSession {
    onUpdateShoppingSession {
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
export const onDeleteShoppingSession = /* GraphQL */ `
  subscription OnDeleteShoppingSession {
    onDeleteShoppingSession {
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
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem {
    onCreateCartItem {
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
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem {
    onUpdateCartItem {
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
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem {
    onDeleteCartItem {
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
export const onCreateCourier = /* GraphQL */ `
  subscription OnCreateCourier {
    onCreateCourier {
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
export const onUpdateCourier = /* GraphQL */ `
  subscription OnUpdateCourier {
    onUpdateCourier {
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
export const onDeleteCourier = /* GraphQL */ `
  subscription OnDeleteCourier {
    onDeleteCourier {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateDeliveryFee = /* GraphQL */ `
  subscription OnCreateDeliveryFee {
    onCreateDeliveryFee {
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
export const onUpdateDeliveryFee = /* GraphQL */ `
  subscription OnUpdateDeliveryFee {
    onUpdateDeliveryFee {
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
export const onDeleteDeliveryFee = /* GraphQL */ `
  subscription OnDeleteDeliveryFee {
    onDeleteDeliveryFee {
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
export const onCreateServiceFee = /* GraphQL */ `
  subscription OnCreateServiceFee {
    onCreateServiceFee {
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
export const onUpdateServiceFee = /* GraphQL */ `
  subscription OnUpdateServiceFee {
    onUpdateServiceFee {
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
export const onDeleteServiceFee = /* GraphQL */ `
  subscription OnDeleteServiceFee {
    onDeleteServiceFee {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness {
    onCreateBusiness {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness {
    onUpdateBusiness {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness {
    onDeleteBusiness {
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
