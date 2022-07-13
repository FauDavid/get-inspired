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
      path: '/wallpapers',
      name: 'wallpapers',
      component: WallpapersView,
      meta: {
        title: 'Wallpapers'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        title: 'Register'
      }
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: QuotesView,
      meta: {
        title: 'Quotes'
      }
    }
  ]
});
