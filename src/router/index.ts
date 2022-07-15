import Vue from 'vue';
import Router from 'vue-router';

import LoginView from '../views/LoginView.vue';
import DashboardMenu from '../components/DashboardMenu.vue'
import HomeView from '../views/HomeView.vue';
import WallpapersView from '../views/WallpapersView.vue';
import QuotesView from '../views/QuotesView.vue';
import MusicView from '../views/MusicView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardMenu,
      meta: {
        title: 'Dashboard'
      },
      children: [
        {
          path: '/dashboard/home',
          name: 'home',
          component: HomeView,
          meta: {
            title: 'Home'
          },
        },
        {
          path: '/dashboard/wallpapers',
          name: 'wallpapers',
          component: WallpapersView,
          meta: {
            title: 'Wallpapers'
          },
        },
        {
          path: '/dashboard/quotes',
          name: 'quotes',
          component: QuotesView,
          meta: {
            title: 'Quotes'
          },
        },
        {
          path: '/dashboard/music',
          name: 'music',
          component: MusicView,
          meta: {
            title: 'Music'
          },
        }
      ]
    }
  ]
});
