import { createRouter, createWebHashHistory } from 'vue-router'
import BookProfileComponent from '@/content/components/profiles/book-profile.component.vue'
import MainPage from '@/shared/pages/main-page.vue'
import UserRegister from '@/user/pages/user-register.vue'
import GenresPage from '@/content/pages/genres-page.component.vue'
import SubscriptionApplication from '@/monetization/pages/subscription-application.component.vue'
import MonetizationApplication from '@/monetization/pages/monetization-application.component.vue'
import ArtistOverview from '@/user/pages/artist-overview.vue'
import BookPublishPage_1 from '@/content/pages/book-publish-page_1.vue'
import BookPublishPage_2 from '@/content/pages/book-publish-page_2.vue'
import ChapterPage from '@/content/pages/chapter-page.vue'
import UserProfilePage from '@/user/pages/user-profile-page.component.vue'
import BookDetailsEditPage_1 from '@/content/pages/book-details-edit-page_1.vue'
import ArtistProfilePage_1 from '@/user/pages/artist-profile-page_1.vue'
import ThePageRoom from '@/collaboration/pages/the-page-room.component.vue'
import ThePageChat from '@/collaboration/pages/the-page-chat.component.vue'
import ChapterpreviewPage from '@/content/pages/chapterpreview-page.vue'
import TheUserBooksHistorialComponent from '@/user/components/the-user-books-historial.component.vue'
import AboutPage from '@/content/pages/about-page.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: MainPage },
  { path: '/register', component: UserRegister },
  { path: '/genre', component: GenresPage },
  { path: '/populars', component: GenresPage },
  { path: '/my-stories', component: TheUserBooksHistorialComponent },
  { path: '/subscription', component: SubscriptionApplication },
  { path: '/monetization', component: MonetizationApplication },
  { path: '/artist', component: ArtistOverview },
  { path: '/publish-1', component: BookPublishPage_1 },
  { path: '/publish-2', component: BookPublishPage_2 },
  { path: '/book-profile', component: BookProfileComponent },
  { path: '/chapter', component: ChapterPage },
  { path: '/writer-profile', component:UserProfilePage },
  { path: '/book-edit', component: BookDetailsEditPage_1 },
  { path: '/illustrator-profile', component: ArtistProfilePage_1 },
  { path: '/artist-room', component: ThePageRoom },
  { path: '/chat', component: ThePageChat },
  { path: '/chapter-preview', component: ChapterpreviewPage },
  { path: '/about', component: AboutPage},
  { path: '/genre/romance', component:()=> import('./content/pages/the-romance-books.component.vue')},
  { path: '/genre/fantasy', component:() => import('./content/pages/the-fantasy-books.component.vue')},
  { path: '/genre/comedy', component: () => import('./content/pages/the-comedy-books.component.vue')},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
