import { createStore } from 'framework7/lite';
import { useCookies } from "vue3-cookies";

const store = createStore({
  state: {
    user: {},
    localDarkTheme: {}
  },
  getters: {
    isDarkTheme({ state }) {
      return state.localDarkTheme;
    },
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    setLocalDarkTheme({state}, status) {
      state.localDarkTheme = status;
      const { cookies } = useCookies();
      cookies.set('isDarkTheme', status);
    },
    setThemeFromCookies({state}) {
      const { cookies } = useCookies();
      state.localDarkTheme = cookies.get('isDarkTheme');
    },
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})

export default store;
