import { createStore } from 'framework7/lite';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const store = createStore({
  state: {
    user: {},
    localDarkTheme: {},
    currentFilter: {
      periodDates: [new Date(), new Date()],
      calendarSports: [],
      calendarSportsType: [],
      ageId: [],
      sexId: [],
      disciplineId: [],
      programId: [],
      locations: [],
      team: []
    },
    filterResults: [],
    filterResultsLoading: false
  },
  getters: {
    allFilter({state}) {
      return state.currentFilter
    },
    filterResultsLoading({state}) {
      return state.filterResultsLoading
    },
    filterResults({state}) {
      return state.filterResults
    },
    isDarkTheme({ state }) {
      return state.localDarkTheme;
    },
    user({ state }) {
      return state.user;
    },
    currentFilter({state}) {
      return state.currentFilter
    },
    currentPeriodDatesFilter({state}) {
      return state.currentFilter.periodDates
    },
    currentLocation({state}) {
      return state.currentFilter.locations
    },
    currentCalendarSports({state}) {
      return state.currentFilter.calendarSports
    },
    currentCalendarSportsType({state}) {
      return state.currentFilter.calendarSportsType
    },
    currentAgeId({state}) {
      return state.currentFilter.ageId
    },
    currentSexId({state}) {
      return state.currentFilter.sexId
    },
    currentProgramId({state}) {
      return state.currentFilter.programId
    },
    currentDisciplineId({state}) {
      return state.currentFilter.disciplineId
    },
    currentTeam({state}) {
      return state.currentFilter.team
    }
  },
  actions: {
    setPeriodDates({state}, arr) {
      state.currentFilter.periodDates = arr;
    },
    setFiltersResultLoading({state}, status) {
      state.filterResultsLoading = status
    },
    setFilter({state}, obj) {
      state.currentFilter = obj;
    },
    clearCurrentFilter({state}) {
      for (let key in state.currentFilter) {
        if (Array.isArray(state.currentFilter[key])) {
          state.currentFilter[key] = []; // Заменяем массив на пустой
        }
    }
    },
    clearFilterResults({state}) {
      state.filterResults = []
    },
    setFiltersResult({state}, arr) {
      state.filterResults = arr;
    },
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
      return fetch('https://api.uapp.space/bryansk/api/auth/authentication', {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'

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
        state.user.login = data.login;
        state.user.password = data.password;
        const { cookies } = useCookies();
        cookies.set("token", commits.token)
        cookies.set("userLogin", data.login)
      });
    },
    userStatusHandler({state}, data) {
      fetch("https://api.uapp.space/bryansk/api/user/me", {
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + data.token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }
      }).then(response => {
        if (!response.ok) {
          throw new Error('Authentication failed');
        }
        return response.json();
      })
      .then(commits => {
        state.user = {
          token: data.token,
          login: commits.login,
          idRole: commits.idRole,
          nameRole: commits.nameRole,
          id: commits.id
        }

        cookies.set("userLogin", data.login)
      })
      }
  },
})

export default store;
