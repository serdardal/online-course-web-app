import { userActionNames } from "../Actions/userActions";
import { users } from "../../StaticFiles/staticDatas";

const initialState = {
  currentUser: "",
  cart: [],
  enrolledCourses: []
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActionNames.LOG_IN:
      return login(state, action.payload.username, action.payload.password);

    case userActionNames.LOG_OUT:
      return logout();

    case userActionNames.ADD_TO_CART:
      return addToCart(state, action.payload.course);

    case userActionNames.DELETE_FROM_CART:
      return deleteFromCart(state, action.payload.course);

    case userActionNames.CLEAR_CART:
      return clearCart(state);

    case userActionNames.PURCHASE_ALL:
      return addEnrolledCourses(state);
  }

  return state;
}

function login(state, username, password) {
  const user = users.filter(person => {
    return person.userName === username && person.password === password;
  })[0];

  if (user !== undefined) {
    return {
      ...state,
      currentUser: user.name
    };
  } else {
    // böyle birisi yok
  }

  return state;
}

function logout() {
  return initialState;
}

function addToCart(state, item) {
  if (!isItemInCartOrCourses(state, item)) {
    console.log("sepete eklendi!");
    return {
      ...state,
      cart: [...state.cart, item]
    };
  }

  console.log("kurs zaten sepette veya zaten sahipsiniz!");
  return state;
}

function isItemInCartOrCourses(state, item) {
  let res = false;
  const cart = state.cart;
  const enrolledCourses = state.enrolledCourses;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === item.id) {
      res = true;
      break;
    }
  }

  for (let i = 0; i < enrolledCourses.length; i++) {
    if (enrolledCourses[i].id === item.id) {
      res = true;
      break;
    }
  }

  return res;
}

function deleteFromCart(state, item) {
  const deletedCart = state.cart.filter(cartItem => {
    return cartItem.id !== item.id;
  });

  return {
    ...state,
    cart: deletedCart
  };
}

function clearCart(state) {
  return {
    ...state,
    cart: []
  };
}

function addEnrolledCourses(state) {
  return {
    ...state,
    enrolledCourses: [...state.enrolledCourses, ...state.cart],
    cart: []
  };
}
