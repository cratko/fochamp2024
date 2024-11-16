import { f7, f7ready } from 'framework7-vue';
import store from '../../js/store.js';
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

function themeInit() {
    console.log("[Init] themeInit loaded")

    if (cookies.isKey("isDarkTheme")) {
        let isDarkTheme = cookies.get("isDarkTheme");

        const boolValue = (isDarkTheme === "true");

        store.dispatch('setLocalDarkTheme', boolValue)
        f7.setDarkMode(boolValue);

        
    }
}

export default themeInit;