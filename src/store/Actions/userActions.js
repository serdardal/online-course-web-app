export const userActionNames = {
  LOG_IN: "LOG_IN"
};

export function login(username, password) {
  return {
    type: userActionNames.LOG_IN,
    payload: {
      userName: username,
      password: password
    }
  };
}
