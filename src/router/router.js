import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AppView from '../views/AppView.vue';
import Error from '../components/Error.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    alias: ['/homepage', '/anasayfa', '/hom', '/homee', ''],
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    alias: ['/hakkinda', '/aboutpage', '/abaut', '/abou'],
  },
  {
    path: '/app',
    name: 'app',
    component: AppView,
    alias: ['/application', '/uygulama', '/ap'],
  },
  {
    path: '/:keyword(.*)*',
    name: 'notFound',
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
