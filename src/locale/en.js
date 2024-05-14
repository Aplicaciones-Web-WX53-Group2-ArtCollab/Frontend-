import main_page_en from './main-page/main_page_en'
import publish_en from '@/locale/publish/publish_en.js'
import detailsEdit_en from '@/locale/details-edit/details-edit_en.js'

const en = {
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

  ...detailsEdit_en,
  ...main_page_en,
  ...publish_en,
}

export default en
