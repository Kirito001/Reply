import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('@/layout'),
		redirect: '/inbox',
		children: [
			{
				path: 'inbox',
				component: () => import('@/views/inbox')
			}, {
        path: 'articles',
        component: () => import('@/views/nothing')
      }, {
        path: 'directMessage',
        component: () => import('@/views/nothing')
      }, {
        path: 'videoChat',
        component: () => import('@/views/nothing')
      }
		]
	}, {
    path: '/:pathMatch(.*)',
    redirect: '/inbox'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router