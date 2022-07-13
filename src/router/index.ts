import Vue from 'vue';
import Router from 'vue-router';

import WallpapersView from '../views/WallpapersView.vue';
import QuotesView from '../views/QuotesView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'wallpapers',
      component: WallpapersView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: QuotesView
    }
  ]
});
