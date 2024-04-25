import { createMemoryHistory, createRouter } from 'vue-router'

import RomanceBooksCards from '@/genres/components/romance-book-card.component.vue'
import FantasyBooksCards from '@/genres/components/fantasy-book-card.component.vue'
import ComedyBooksCard from '@/genres/components/comedy-books-card.component.vue'
import AllBookCard from '@/genres/components/all-book-card.component.vue'

const routes = [
  { path: '/', component: AllBookCard},
  { path: '/romance', component: RomanceBooksCards},
  { path: '/fantasy', component: FantasyBooksCards},
  { path: '/comedy', component: ComedyBooksCard },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router