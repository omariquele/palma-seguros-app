const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/WelcomePage.vue') },
      { path: 'menu', component: () => import('pages/MenuPage.vue') },
      { path: 'seguro-particular', component: () => import('pages/SeguroParticular.vue') },
      { path: 'seguro-automovel', component: () => import('pages/SeguroAutomovel.vue') },
      { path: 'detalhes-apolice', component: () => import('pages/DetalhesApolice.vue') },
      { path: 'apolice', component: () => import('pages/Apolice.vue') },
      { path: 'sinistro', component: () => import('pages/Sinistro.vue') },
      { path: 'rastreio', component: () => import('pages/Rastreio.vue') },
      { path: 'mapview', component: () => import('pages/Mapview.vue') }
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
