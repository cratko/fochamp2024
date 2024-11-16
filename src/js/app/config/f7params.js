import routes from '../../routes.js';
import store from '../../store.js'

const f7params = {
    name: 'Fochamp', // App name
    theme: 'auto', // Automatic theme detection

    // App store
    store: store,
    // App routes
    routes: routes,
    darkMode: 'auto',

    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV ==='production' ? {
      path: '/service-worker.js',
    } : {},

    view: {
        browserHistory: true,
        browserHistoryAnimate: true, // Enable animation on history changes
    },
};


export default f7params;
