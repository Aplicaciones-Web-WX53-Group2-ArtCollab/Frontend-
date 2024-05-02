import main_page_es from '@/locale/main-page/main_page_es.js'
import publish_es from '@/locale/publish/publish_es.js'

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
