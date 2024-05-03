<script>
import TheUserLogin from '@/user/components/the-user-login.component.vue'
import TheUserLoginEmail from '@/user/components/the-user-login-email.component.vue'
import { UserEndpointService } from '@/shared/services/user-endpoint.service.js'

export default {
  name: 'navbar-content',
  components: {
    TheUserLoginEmail,
    TheUserLogin,
  },
  props: {
    showLogin: {
      type: Boolean,
      default: false
    },
    showEmailLogin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      loggedInUser:null,
      userServices: new UserEndpointService(),
      items: [
        {
          label: 'Update',
          icon: 'pi pi-refresh'
        },
        {
          label: 'Delete',
          icon: 'pi pi-times'
        }
      ],
    };
  },
  methods: {
    openLogin() {
      this.$emit('update:showLogin', true);
    },

    handleCloseLogin() {
      this.$emit('update:showLogin', false);
    },

    handleShowEmailLogin() {
      this.$emit('update:showEmailLogin', true);
    },

    handleHideEmailLogin() {
      this.$emit('update:showEmailLogin', false);
    },

    handleGoBack() {
      this.$emit('update:showLogin', true);
      this.$emit('update:showEmailLogin', false);
    },

    getLoggedInUser(){
      this.userServices.getLoggedInUser().then((response) => {
        this.loggedInUser = response.data[0];
        console.log(this.loggedInUser);
      });
    }
  },
  mounted() {
    this.getLoggedInUser();
  },
};
</script>

<template>
  <pv-toolbar class="flex justify-content-center items-center toolbar" aria-label="Toolbar content">
    <template #start>
      <div class=" flex flex-row gap-7 justify-content-center" aria-label="Main navigation section">
        <router-link to="/">
        <img class="md:block hidden cursor-pointer" src="../../assets/logo.png" width="40" height="40" alt="ArtCollab Logo" />
        </router-link>
          <div class="flex justify-content-center">
          <div  class=" block lg:hidden card flex justify-content-center" aria-label="toolbar features content">
            <pv-sidebar   v-model:visible="visible" header="Artcollab">
              <router-link to="/">
              <img class="md:hidden" src="../../assets/logo.png" width="40" height="40" alt="ArtCollab Logo"/>
              </router-link>
              <router-link to="/genre">
                <h2> {{ $t('gender') }} </h2>
              </router-link>
              <router-link to="/populars">
              <h2> {{ $t('popular')}} </h2>
              </router-link>
              <router-link to="/subscription">
              <h2> {{ $t('subscription') }} </h2>
              </router-link>
              <router-link to="/monetization">
              <h2> {{ $t('monetization') }} </h2>
              </router-link>
              <router-link to="/artist">
              <h2 > {{ $t('artists') }} </h2>
              </router-link>
              <div v-if="loggedInUser" class="flex gap-3 flex-column w-8">
                <router-link to="/publish-1">
                  <pv-button class="bg-cyan-600" label="Publicar"> {{ $t('publish') }} </pv-button>
                </router-link>
                  <router-link to="/writer-profile">
                    <pv-button class="flex items-center gap-2">
                    <img :src="loggedInUser.imgURL" alt="ProfileImage" height="25px" class="w-8 h-8 rounded-full">
                    <span>{{ loggedInUser.username }}</span>
                    </pv-button>
                </router-link>
              </div>
              <!-- Muestra el botón de inicio de sesión si el usuario no está conectado -->
              <div v-else>
                <pv-button @click="openLogin" class="md:block hidden bg-cyan-600" label="Iniciar Sesion"> {{ $t('login') }} </pv-button>
                <the-user-login ref="login"/>
              </div>
            </pv-sidebar>
            <pv-button class="bg-transparent text-black-alpha-80 border-transparent text-2xl hover:text-cyan-600"  icon="pi pi-bars"  @click="visible = true" aria-label="Menu" />
          </div>
          <div  class=" hidden  text-center lg:flex lg:flex-row text-xs gap-5 align-items-center navbar-links " aria-label="toolbar features content" >
            <router-link to="/genre">
              <h2> {{ $t('gender') }} </h2>
            </router-link>
            <router-link to="/populars">
              <h2> {{ $t('popular')}} </h2>
            </router-link>
            <router-link to="/subscription">
              <h2> {{ $t('subscription') }} </h2>
            </router-link>
            <router-link to="/monetization">
              <h2> {{ $t('monetization') }} </h2>
            </router-link>
            <router-link to="/artist">
              <h2 > {{ $t('artists') }} </h2>
            </router-link>
          </div>
        </div>
        <div class="card flex flex-wrap justify-content-center gap-3" aria-label="search buttons content">
          <pv-iconfield icon-position="left" >
            <pv-inputicon class="pi pi-search text-black-alpha-90 text-2xl absolute mt-1 top-0"></pv-inputicon>
            <pv-inputtext  class="pl-6" />
          </pv-iconfield>
        </div>
        <div aria-label="login button" class="hidden md:block">
          <div v-if="loggedInUser" class="flex gap-3">
            <router-link to="/publish-1">
              <pv-button class="md:block hidden bg-cyan-600" label="Publicar"> {{ $t('publish') }} </pv-button>
            </router-link>
              <router-link to="/writer-profile">
              <pv-button class="flex items-center gap-2 hidden">
                <img :src="loggedInUser.imgURL" alt="ProfileImage" height="25px" class="w-8 h-8 rounded-full">
                <span>{{ loggedInUser.username }}</span>
              </pv-button>
            </router-link>
          </div>
          <!-- Muestra el botón de inicio de sesión si el usuario no está conectado -->
          <div v-else>
            <pv-button @click="openLogin" class="md:block hidden bg-cyan-600" label="Iniciar Sesion"> {{ $t('login') }} </pv-button>
            <the-user-login ref="login"/>
          </div>
        </div>
      </div>
    </template>

  </pv-toolbar>
  <the-user-login
    :showLogin="showLogin"
    v-if="showLogin"
    @update:showLogin="handleCloseLogin"
    @update:showEmailLogin="handleShowEmailLogin"
  />

  <the-user-login-email v-if="showEmailLogin" :showEmailLogin="showEmailLogin" @back="handleGoBack" @update:showEmailLogin="handleHideEmailLogin" />

</template>

<style scoped>
.toolbar{
  border-radius:0;
}
h2:hover{
  cursor:pointer;
  color: #00B4CC;
}
h2{
  color:black;
  font-size: 1rem;
  font-weight: bold;
}
.navbar-links img {
  cursor: pointer;
}
</style>