import { createRouter, createWebHistory } from 'vue-router';

import { NomadHomePage, NomadReportPage } from '@unifid-portal/nomad';
import { TestComponent1, TestComponent2, TestComponent3, TestComponent4 } from '@unifid-portal/rmax';

import AppLayout from '../layouts/AppLayout.vue';
import LoginPage from '../views/LoginPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

const appRoutes = [
  {
    path: '/nomad',
    name: 'nomad-home',
    component: NomadHomePage,
  },
  {
    path: '/nomad/report',
    name: 'nomad-report',
    component: NomadReportPage,
  },
  {
    path: '/rmax/test-1',
    name: 'rmax-test-1',
    component: TestComponent1,
  },
  {
    path: '/rmax/test-2',
    name: 'rmax-test-2',
    component: TestComponent2,
  },
  {
    path: '/rmax/test-3',
    name: 'rmax-test-3',
    component: TestComponent3,
  },
  {
    path: '/rmax/test-4',
    name: 'rmax-test-4',
    component: TestComponent4,
    props: {
      title: 'Mounted from shell router',
    },
  },
];

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        redirect: '/nomad',
      },
      ...appRoutes,
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
  },
];

export function createAppRouter(options = {}) {
  return createRouter({
    history: options.history || createWebHistory(),
    routes,
  });
}
