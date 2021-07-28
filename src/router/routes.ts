import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    meta: { requiresGuest: true },
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      {
        path: '/',
        meta: { requiresGuest: true },
        component: () => import('pages/LandingPage.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'home',
        meta: { requiresGuest: true },
        component: () => import('pages/HomePage.vue')
      },
      {
        path: 'signup',
        meta: { requiresGuest: true },
        component: () => import('pages/SignUp.vue')
      },
      {
        path: 'login',
        meta: { requiresGuest: true },
        component: () => import('src/pages/LoginPage.vue')
      }
    ]
  },
  {
    path: '/admin/',
    meta: { requiresAdmin: true },
    component: () => import('src/layouts/AdminLayout.vue'),
    children: [
      {
        path: 'accounts',
        component: () => import('../pages/admin/AdminPage.vue')
      },
      { path: '', component: () => import('pages/LandingPage.vue') }
    ]
  },
  {
    path: '/employer/',
    meta: { requiresEmployer: true },
    component: () => import('src/layouts/EmployerLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') },
      {
        path: 'applicants',
        component: () => import('../pages/employer/EmployerPage.vue')
      },
      {
        path: 'profile',
        meta: { requiresEmployer: true },
        component: () => import('src/pages/employer/EmployerProfile.vue')
      }
    ]
  },
  {
    path: '/worker/',
    meta: { requiresAdmin: true },
    component: () => import('src/layouts/WorkerLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') },
      {
        path: 'profile',
        meta: { requiresEmployer: true },
        component: () => import('src/pages/worker/WorkerProfile.vue')
      }
    ]
  },
  {
    path: '/moderator/',
    meta: { requiresModerator: true },
    component: () => import('src/layouts/ModeratorLayout.vue'),
    children: [
      {
        path: 'jobs',
        component: () => import('../pages/moderator/ModeratorPage.vue')
      },
      { path: '', component: () => import('pages/LandingPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
