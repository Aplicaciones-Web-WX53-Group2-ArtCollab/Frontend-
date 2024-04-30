
import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
  { path: '/', component: () => import('./content/pages/genres-page.component.vue')},
  { path: '/romance', component:()=> import('./content/components/popular-books/romance-book-card.component.vue')},
  { path: '/fantasy', component:() => import('./content/components/popular-books/fantasy-book-card.component.vue')},
  { path: '/comedy', component: () => import('./content/components/popular-books/comedy-books-card.component.vue')},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
