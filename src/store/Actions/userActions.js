export const userActionNames = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
  ADD_TO_CART: "ADD_TO_CART",
  DELETE_FROM_CART: "DELETE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  PURCHASE_ALL: "PURCHASE_ALL"
};

export function login(username, password) {
  return {
    type: userActionNames.LOG_IN,
    payload: {
      username: username,
      password: password
    }
  };
}

export function logout() {
  return {
    type: userActionNames.LOG_OUT
  };
}

export function addToCart(course) {
  return {
    type: userActionNames.ADD_TO_CART,
    payload: {
      course: course
    }
  };
}

export function deleteFromCart(course) {
  return {
    type: userActionNames.DELETE_FROM_CART,
    payload: {
      course: course
    }
  };
}

export function clearCart() {
  return {
    type: userActionNames.CLEAR_CART
  };
}

export function purchaseAll() {
  return {
    type: userActionNames.PURCHASE_ALL
  };
}
