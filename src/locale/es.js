import login_es from '@/locale/login/login_es.js'
import register_es from '@/locale/register/register_es.js'
import recover_es from '@/locale/recover/recover_es.js'

import main_page_es from '@/locale/main-page/main_page_es.js'
import publish_es from '@/locale/publish/publish_es.js'

const es = {
  gender: 'Género',
  popular: 'Populares',
  subscription: 'Suscripciones',
  monetization: 'Monetización',
  artists: 'Artistas',
  login: 'Iniciar sesión',
  publish: 'Publicar',
  about: 'Acerca de',
  copyright: 'Todos los derechos reservados',
  published_books: 'Libros publicados',

  artistProfile:{
    social_media: 'Redes sociales',
    illustrated_books: 'Libros que ha ilustrado',
    portfolio: 'Portafolio',
  },

  ...login_es,
  ...register_es,
  ...recover_es,
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
  editDetails:{
    editDetails: 'Editar detalles de la historia',
    storyDetails: 'Detalles de la historia',
    contentTable: 'Tabla de contenidos',
    earned: 'Ingresos obtenidos',
    title: 'Título',
    description: 'Descripción',
    save: 'Guardar',
    cancel: 'Cancelar',
    prologue: 'Prólogo',
    chapter: 'Capítulo',
  },

  ...main_page_es,
  ...publish_es,
}

export default es
