import main_page_es from '@/locale/main-page/main_page_es.js'
import publish_es from '@/locale/publish/publish_es.js'
import detailsEdit_es from '@/locale/details-edit/details-edit_es.js'

const es = {
  navbar:{
   gender: 'Género',
   popular: 'Populares',
   subscription: 'Suscripciones',
   monetization: 'Monetización',
   artists: 'Artistas',
   login: 'Iniciar sesión',
  },
  footer:{
    gender:'Género',
    popular: 'Populares',
    subscription: 'Suscripciones',
    monetization: 'Monetización',
    about: 'Acerca de',
    copyright: 'Todos los derechos reservados',
    artists: 'Artistas',
  },

  ...detailsEdit_es,
  ...main_page_es,
  ...publish_es,
}

export default es
