import login_en from '@/locale/login/login_en.js'
import register_en from '@/locale/register/register_en.js'
import recover_en from '@/locale/recover/recover_en.js'

const en = {
  gender: 'Gender',
  popular: 'Popular',
  subscription: 'Subscription',
  monetization: 'Monetization',
  artists: 'Artists',
  login: 'Log in',
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
}

export default en
