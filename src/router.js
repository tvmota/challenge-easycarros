import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Api from './services/Api';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/app',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  const tkn = window.sessionStorage.getItem('tkn');

  if (to.fullPath === '/') {
    if (tkn) {
      next('/app');
    }
  }

  if (to.fullPath === '/app') {
    if (!tkn) {
      next('/');
    } else {
      Api.defaults.headers.common.Authorization = `Bearer ${tkn}`;
    }
  }

  next();
});

export default router;
