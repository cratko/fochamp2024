import userStatusHandler from './userStatusHandler';
import themeInit from './themeInit';

async function init() {
    userStatusHandler()
    themeInit()
}

export default init;