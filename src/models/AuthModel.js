export default {
  namespace: "auth",
  state: {
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    login(state, { payload: { username } }) {
      if (username !== "") {
        localStorage.setItem("access_token", "test");
        localStorage.setItem("user", username);
        return {
          ...state,
          isAuthenticated: true,
          user: { username },
        };
      }
      return {
        ...state,
      };
    },
    logout(state) {
      if (localStorage["access_token"]) {
        localStorage.removeItem("access_token");
      }
      return {
        ...state,
        isAuthenticated: false,
        username: {},
      };
    },
    checkLogin(state) {
      if (localStorage["access_token"]) {
        // console.log(localStorage.getItem("user"));
        return {
          ...state,
          isAuthenticated: true,
        };
      }
      return {
        ...state,
      };
    },
  },
  subcriptions: {
    setup({ dispatch, history }) {
      // todo
    },
  },
};
