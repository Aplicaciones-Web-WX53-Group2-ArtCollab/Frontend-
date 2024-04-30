
import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
  { path: '/', component: () => import('./content/pages/genres-page.component.vue')},
  { path: '/romance', component:()=> import('./content/pages/the-romance-books.component.vue')},
  { path: '/fantasy', component:() => import('./content/pages/the-fantasy-books.component.vue')},
  { path: '/comedy', component: () => import('./content/pages/the-comedy-books.component.vue')},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
