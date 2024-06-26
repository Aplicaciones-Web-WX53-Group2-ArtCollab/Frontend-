import login_en from '@/locale/login/login_en.js'
import register_en from '@/locale/register/register_en.js'
import recover_en from '@/locale/recover/recover_en.js'

import main_page_en from './main-page/main_page_en'
import publish_en from '@/locale/publish/publish_en.js'
import detailsEdit_en from '@/locale/details-edit/details-edit_en.js'
import about_en from '@/locale/about/about_en.js'
import book_profile_en from '@/locale/book-profile/book_profile_en.js'
import genreNavbar_en from '@/locale/genre-navbar/genre-navbar_en.js'
import connect_en from '@/locale/connect/connect_en.js'

const en = {
  gender: 'Gender',
  popular: 'Popular',
  subscription: 'Subscription',
  monetization: 'Monetization',
  artists: 'Artists',
  login: 'Log in',
  publish: 'Publish',
  about: 'About',
  copyright: 'All rights reserved',
  published_books: 'Published books',

  artistProfile:{
    social_media: 'Social Media',
    illustrated_books: 'Books Illustrated by Him/Her',
    portfolio: 'Portfolio',
  },

  ...login_en,
  ...register_en,
  ...recover_en,
  ...about_en,
  ...book_profile_en,
  ...genreNavbar_en,
  ...connect_en,
 navbar:{
   gender: 'Gender',
   popular: 'Popular',
   subscription: 'Subscription',
   monetization: 'Monetization',
   artists: 'Artists',
   login: 'Log in',
  },
  footer:{
    gender:'Gender',
    popular: 'Popular',
    subscription: 'Subscription',
    monetization: 'Monetization',
    about: 'About',
    copyright: 'All rights reserved',
    artists: 'Artists',
  },
  artistroom:{
        room: 'This is your artist room',
        chat: 'Start a New Chat',
        newchat: 'New chat with',
        text: 'You: Perfect',
        deleteroom: 'Delete the room',
    },
  chatroom:{
        rooms: "Artists Room",
        profile: "Profile",
        search: "Search",
        settings: "Multimedia, files and links",
        notMessage:'Not message found :('
    },

  ...detailsEdit_en,
  ...main_page_en,
  ...publish_en,
  subscriptionCards:{
    priceArtist: '$.1.01',
    priceReader:'$.1.60',
    priceWriter:'$.2.17',
    perMonth: '/month',
    artist: 'Artist',
    reader: 'Reader',
    writer: 'Writer',
    profileHighlight: 'Profile highlighted at the start of the session',
    priority: 'Have higher priority to work with featured writers',
    subscribe: 'Subscribe',
    cancelAnytime: 'Cancel at any time',
    freeMonthlyPackage: 'A free monthly package of coins',
    earlyAccess: 'Early access to new stories',
    noAds: 'No ads',
    storyHighlight: 'Story highlighted on the main page',
    storyAds: 'Ads of your story on our pages',
    recommendedList: 'Enter our list of stories recommended to publishers',

  },
  heroSubscription:{
    subscriptionPlans: 'Subscription Plans',
  },

  coinCards:{
    priceCoin10: '$0.27',
    priceCoin50: '$1.08',
    priceCoin125: '$2.16',
    priceCoin500: '$7.00',
    priceCoin1000: '$12.41',
  },
  coinSection:{
    coinPackages: 'Coin Packages',
    unlockChapters: 'They help you unlock chapters and complete stories in advance',
  },
  heroMonetization: {
        title: 'Earn profits from your story',
  },
  stepsContent: {
    title: 'Advertising Revenue Sharing Program',
    creatorsCanEarn: 'Creators can earn 50% from the ads shown in their series!',
    followSteps: 'Follow these steps to join the advertising revenue sharing program',
    step1: 'Register with your writer account in the advertising revenue sharing program',
    step2: 'Reach 20,000 likes and 40,000 global monthly views on your book',
    step3: 'Apply for a review',
    startSharing: 'Start sharing your stories now!'
  }
}

export default en
