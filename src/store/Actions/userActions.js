export const userActionNames = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT"
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
