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
  console.log("sepete eklendi!")
  return {
    ...state,
    cart: [...state.cart, item]
  };
}
