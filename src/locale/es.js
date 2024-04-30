import login_es from '@/locale/login/login_es.js'
import register_es from '@/locale/register/register_es.js'
import recover_es from '@/locale/recover/recover_es.js'

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
}

export default es
