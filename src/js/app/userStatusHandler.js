import { f7 } from 'framework7-vue';

function userStatusHandler() {
    console.log("[Handler] userStatusHandler loaded")

    f7.view.main.router.navigate('/auth/')
}

export default userStatusHandler;