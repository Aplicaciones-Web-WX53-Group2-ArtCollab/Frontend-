import main_page_en from './main-page/main_page_en'
import publish_en from '@/locale/publish/publish_en.js'

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
  editDetails:{
    editDetails: 'Edit story details',
    storyDetails: 'Story details',
    contentTable: 'Table of contents',
    earned: 'Earned income',
    title: 'Title',
    description: 'Description',
    cancel: 'Cancel',
    save: 'Save',
    prologue: 'Prologue',
    chapter: 'Chapter',
  },

  ...main_page_en,
  ...publish_en,
}

export default en
