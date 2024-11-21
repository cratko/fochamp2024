import { f7, useStore } from 'framework7-vue';
import { useCookies } from "vue3-cookies";
import {ref, provide} from "vue";

const { cookies } = useCookies();

function userStatusHandler() {
    console.log("[Handler] userStatusHandler loaded")

    if (cookies.isKey("token")) {
        const token = cookies.get("token")

        const user = useStore("user")
        f7.store.dispatch('userStatusHandler', {token: token})
        .then(() => {

        })
        .catch(error => {
            console.log(error)
        })
        console.log(user.value)
    } else {
        f7.view.main.router.navigate('/auth/',  {
            reloadCurrent: true
        })
    }

}

export default userStatusHandler;