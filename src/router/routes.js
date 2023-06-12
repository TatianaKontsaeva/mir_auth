
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/SignUp',
        name: 'signup',
        component: () => import('components/SignUpPage.vue'),
      },
      {
        path: '/Login',
        name: 'login',
        component: () => import('components/LoginPage.vue'),
      },
      {
        path: '/Profile',
        name: 'profile',
        component: () => import('components/UserProfile.vue'),
      },
  
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
