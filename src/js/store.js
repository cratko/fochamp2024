import { createStore } from 'framework7/lite';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const store = createStore({
  state: {
    user: {},
    localDarkTheme: {}
  },
  getters: {
    isDarkTheme({ state }) {
      return state.localDarkTheme;
    },
    getUser({ state }) {
      return state.user;
    }
  },
  actions: {
    setLocalDarkTheme({state}, status) {
      state.localDarkTheme = status;
      cookies.set('isDarkTheme', status);
    },
    setThemeFromCookies({state}) {
      const { cookies } = useCookies();
      state.localDarkTheme = cookies.get('isDarkTheme');
    },
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
    auth({state}, data) {
      return fetch('http://90.156.208.88:8080/bryansk/api/auth/authentication', {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: data.login,
          password: data.password
        }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Authentication failed');
        }
        return response.json();
      })
      .then(commits => {
        state.user.token = commits.token;
        state.user.login = login;
        state.user.password = password;
      });
    }
  },
})

export default store;
