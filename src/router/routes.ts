import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/homePage.vue') },
      { path: '/home', component: () => import('pages/homePage2.vue') },
      { path: '/signup', component: () => import('pages/SignUp.vue') },
      { path: '/login', component: () => import('pages/loginPage.vue') },
      { path: '/review', component: () => import('pages/reviewPage.vue') },
      { path: '/workerProfile', component: () => import('pages/worker/workerProfile.vue') },
     // { path: '/employerProfile', component: () => import('pages/employer/employerProfile.vue') } 
    ]
  },
  {
    path: '/admins/',
    component: () =>
        import ('src/layouts/adminLayout.vue'),
    children: [
      { path: 'accounts', component: () => import ('../pages/admin/adminPage.vue') },
      { path: 'jobs', component: () => import ('../pages/moderator/moderatorPage.vue') },
  
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
