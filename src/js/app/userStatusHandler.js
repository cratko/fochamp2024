import { f7 } from 'framework7-vue';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

function userStatusHandler() {
    console.log("[Handler] userStatusHandler loaded")

    if (cookies.isKey("token")) {
        const token = cookies.get("token")
        f7.store.dispatch('userStatusHandler', {token: token})

    } else {
        f7.view.main.router.navigate('/auth/',  {
            reloadCurrent: true
        })
    }

}

export default userStatusHandler;