import { createWebHistory, createRouter } from 'vue-router';

import LoginPage from './pages/LoginPage.vue';

const About = { template: '<div>About</div>' };

const routes = [
  { path: '/', component: LoginPage },
  { path: '/about', component: About, meta: { layout: 'AdminLayout' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
