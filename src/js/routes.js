import HomePage from '../pages/home.vue';
import AuthPage from '../pages/auth.vue';
import RegisterPage from '../pages/register.vue';

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
    path: '/register',
    component: RegisterPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
