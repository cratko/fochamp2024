import HomePage from '../pages/home.vue';
import AuthPage from '../pages/auth.vue';

import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/auth',
    component: AuthPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
