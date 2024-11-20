import HomePage from '../pages/home.vue';
import AuthPage from '../pages/auth.vue';
import RegisterPage from '../pages/register.vue';
import AdminPage from '../pages/admin.vue';

import NotFoundPage from '../pages/404.vue';
import ProfilePage from '../pages/profile.vue';
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
    path: '/profile',
    component: ProfilePage,
  },
  {
    path: '/admin',
    component: AdminPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
