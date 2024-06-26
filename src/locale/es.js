import login_es from '@/locale/login/login_es.js'
import register_es from '@/locale/register/register_es.js'
import recover_es from '@/locale/recover/recover_es.js'

import main_page_es from '@/locale/main-page/main_page_es.js'
import publish_es from '@/locale/publish/publish_es.js'
import detailsEdit_es from '@/locale/details-edit/details-edit_es.js'
import about_es from '@/locale/about/about_es.js'
import book_profile_es from '@/locale/book-profile/book_profile_es.js'
import genreNavbar_es from '@/locale/genre-navbar/genre-navbar_es.js'
import connect_es from '@/locale/connect/connect_es.js'

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
  ...about_es,
  ...book_profile_es,
  ...genreNavbar_es,
  ...connect_es,
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
    artistroom:{
        room: 'Esta book_profile_es tu sala de artista',
        chat: 'Iniciar un nuevo chat',
        newchat: 'Nuevo chat con',
        text: 'Tu: Perfecto',
        deleteroom: 'Eliminar la sala',
    },
    chatroom:{
        rooms: "Sala de artistas",
        profile: "Perfil",
        search: "Buscar",
        settings: "Multimedia, archivos y enlaces",
        notMessage:'No se encontraron mensajes :('
    },
  subscriptionCards:{
    priceArtist: 'S/.3.99',
    priceReader:'S/.5.99',
    priceWriter:'S/.7.99',
    perMonth: '/mes',
    artist: 'Artista',
    reader: 'Lector',
    writer: 'Escritor',
    profileHighlight: 'Perfil destacado al inicio de la sesión',
    priority: 'Tener mayor prioridad para trabajar con escritores destacados',
    subscribe: 'Suscribirse',
    cancelAnytime: 'Cancela book_profile_en cualquier momento',
    freeMonthlyPackage: 'Un paquete mensual gratuito de monedas',
    earlyAccess: 'Acceso anticipado a nuevas historias',
    noAds: 'Sin anuncios',
    storyHighlight: 'Historia destacada book_profile_en la página principal',
    storyAds: 'Anuncios de su historia book_profile_en nuestras páginas',
    recommendedList: 'Entrar book_profile_en nuestra lista de historias recomendadas a editoriales'
  },

  heroSubscription:{
    subscriptionPlans: 'Planes de suscripción',
  },
  coinCards:{
    priceCoin10: 'S/.0.99',
    priceCoin50: 'S/.3.99',
    priceCoin125: 'S/.7.99',
    priceCoin500: 'S/.25.99',
    priceCoin1000: 'S/.45.99'
  },
  coinSection:{
    coinPackages: 'Paquetes de monedas',
    unlockChapters: 'Te ayudan a desbloquear capítulos y completar historias con anticipación',
  },


  heroMonetization: {
      title: 'Obtén ganancias por tu historia',
  },
  stepsContent: {
    title: 'Programa de reparto de ingresos publicitarios',
    creatorsCanEarn: '¡Los creadores pueden ganar 50% por los anunciones mostrados book_profile_en sus series!',
    followSteps: 'Sigue los siguientes pasos para unirte al programa de reparto de ingresos publicitarios',
    step1: 'Registrate con tu cuenta de escritor book_profile_en el programa de reparto de ingresos publicitarios',
    step2: 'Alcanza los 20,000 me gusta y 40,000 vistas globales mensuales book_profile_en tu libro',
    step3: 'Aplica para una revisión',
    startSharing: '¡Comienza a compartir tus historias ahora!'
  }
}

export default es