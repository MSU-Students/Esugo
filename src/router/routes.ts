import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/homePage.vue') },
      { path: '/signup', component: () => import('pages/SignUp.vue') },
      { path: '/login', component: () => import('pages/loginPage.vue') },
      { path: '/review', component: () => import('pages/reviewPage.vue') },
      { path: '/workerProfile', component: () => import('pages/worker/workerProfile.vue') },
      { path: '/employerProfile', component: () => import('pages/employer/employerProfile.vue') },
      { path: '/manageaccount', component: () => import('pages/admin/ManageAccount.vue') },
      
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
