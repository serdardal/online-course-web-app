import React from "react";
import { userActionNames } from "../Actions/userActions";
import { users } from "../../StaticFiles/staticDatas";
import { message } from "antd";

const initialState = {
  currentUser: "",
  cart: [],
  enrolledCourses: [],
  budget: -1,
  cartTotal: 0
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
    message.success("Logged in successfully!");
    return {
      ...state,
      currentUser: user.name,
      budget: user.budget
    };
  } else {
    message.warning("Wrong username or password!");
  }

  return state;
}

function logout() {
  return initialState;
}

function addToCart(state, item) {
  if (!isItemInCartOrCourses(state, item)) {
    message.success("Course added to cart!");
    return {
      ...state,
      cart: [...state.cart, item],
      cartTotal: state.cartTotal + item.price
    };
  }

  message.warning("You have this course in your cart or enrolled courses!");
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

  message.success("Course deleted from your cart!");

  return {
    ...state,
    cart: deletedCart,
    cartTotal: state.cartTotal - item.price
  };
}

function clearCart(state) {
  return {
    ...state,
    cart: [],
    cartTotal: 0
  };
}

function addEnrolledCourses(state) {
  if (state.budget >= state.cartTotal) {
    message.success(
      "Process successful, course added to your enrolled course list!"
    );
    return {
      ...state,
      enrolledCourses: [...state.enrolledCourses, ...state.cart],
      cart: [],
      budget: state.budget - state.cartTotal,
      cartTotal: 0
    };
  }

  message.warning("Insufficient balance!");
  return state;
}
