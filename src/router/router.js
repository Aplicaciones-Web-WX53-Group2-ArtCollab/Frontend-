import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/public/pages/main-page.vue'
import UserRegister from '@/user/pages/user-register.vue'
import GenresPage from '@/content/pages/genres-page.component.vue'
import SubscriptionApplication from '@/monetization/pages/subscription-application.component.vue'
import MonetizationApplication from '@/monetization/pages/monetization-application.component.vue'
import ArtistOverview from '@/user/pages/artist-overview.vue'
import BookPublishPage from '@/content/pages/book-publish-page.vue'
import ChapterPublishPage from '@/content/pages/chapter-publish-page.vue'
import ChapterPage from '@/content/pages/chapter-page.vue'
import UserProfilePage from '@/user/pages/user-profile-page.component.vue'
import BookDetailsEditPage from '@/content/pages/book-details-edit-page.vue'
import ArtistProfilePage from '@/user/pages/artist-profile-page.vue'
import ThePageRoom from '@/collaboration/pages/the-page-room.component.vue'
import ThePageChat from '@/collaboration/pages/the-page-chat.component.vue'
import ChapterPreviewPage from '@/content/pages/chapterpreview-page.vue'
import AboutPage from '@/content/pages/about-page.vue'
import UserStories from '@/user/pages/user-stories.vue'
import ChapterDetailsEditPage from '@/content/pages/chapter-details-edit-page.vue'
import BookProfilePage from '@/content/pages/book-profile-page.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: MainPage },
  { path: '/register', component: UserRegister },
  { path: '/genre', component: GenresPage },
  { path: '/populars', component: GenresPage },
  { path: '/my-stories', component: UserStories },
  { path: '/subscription', component: SubscriptionApplication },
  { path: '/monetization', component: MonetizationApplication },
  { path: '/artist', component: ArtistOverview },
  { path: '/book-publish', component: BookPublishPage },
  { path: '/chapter-publish', component: ChapterPublishPage },
  { path: '/book-profile', component: BookProfilePage },
  { path: '/chapter', component: ChapterPage },
  { path: '/writer-profile', component:UserProfilePage },
  { path: '/book-edit', component: BookDetailsEditPage },
  { path: '/chapter-edit', component: ChapterDetailsEditPage },
  {
    path: '/illustrator-profile/:id',
    name: 'IllustratorProfile',
    component: ArtistProfilePage
  },
  { path: '/artist-room', component: ThePageRoom },
  { path: '/chat', component: ThePageChat },
  { path: '/chapter-preview', component: ChapterPreviewPage },
  { path: '/about', component: AboutPage},
  { path: '/genre/romance', component:()=> import('@/content/pages/the-romance-books.component.vue')},
  { path: '/genre/fantasy', component:() => import('@/content/pages/the-fantasy-books.component.vue')},
  { path: '/genre/comedy', component: () => import('@/content/pages/the-comedy-books.component.vue')},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
