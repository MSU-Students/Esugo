import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') },
      { path: '/home', component: () => import('pages/LandingPage.vue') },
      { path: '/signup', component: () => import('pages/SignUp.vue') },
      
      { path: '/beforesignup', component: () => import('pages/Sign.vue') },
      { path: '/login', component: () => import('pages/loginPage.vue') },
      { path: '/workerProfile', component: () => import('pages/worker/workerProfile.vue') },
      { path: '/employerProfile', component: () => import('pages/employer/employerProfile.vue') } 
    ]
  },
  {
    path: '/admin/',
    component: () =>
        import ('src/layouts/adminLayout.vue'),
    children: [
      { path: 'accounts', component: () => import ('../pages/admin/adminPage.vue') },
      { path: 'home', component: () => import('pages/LandingPage.vue') },
    ]
},
{
  path: '/moderator/',
  component: () =>
      import ('src/layouts/adminLayout.vue'),
  children: [
    { path: 'jobs', component: () => import ('../pages/moderator/moderatorPage.vue') },
    { path: 'home', component: () => import('pages/LandingPage.vue') },

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
