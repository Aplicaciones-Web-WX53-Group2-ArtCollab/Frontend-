<script>
export default {
  name: "the-user-configuration",
    data() {
      return {
        showCancel: {
          username: false,
          password: false,
          email: false,
          subscription: false,
          artist: false
        }
      }
    },
    methods: {
      toggleCancel(field) {
        this.showCancel[field] = !this.showCancel[field];
      }
  }
}
</script>

<template>
  <div class="back" aria-label="User configuration page">
    <h1>{{$t('account')}}</h1>
  <p class="text-xl">{{$t('textaccount')}}</p>
  <br/>
  <div class="border border-round" aria-label="Account settings">
    <pv-card>
      <template #content>
          <div class="text-center or" aria-label="User settings">
            <p class="lg:text-lg text-lg">{{$t('name')}}  <pv-button :disabled="showCancel.username" class="orange-button" @click="toggleCancel('username')" :label="$t('change')" link /> <pv-button class="red-button" v-if="showCancel.username" @click="toggleCancel('username')" :label="$t('delete')" link /></p>
            <p class="lg:text-lg text-lg">{{$t('password')}}  <pv-button :disabled="showCancel.password" class="orange-button" @click="toggleCancel('password')" :label="$t('change')" link /> <pv-button class="red-button" v-if="showCancel.password" @click="toggleCancel('password')" :label="$t('delete')" link /></p>
            <p class="lg:text-lg text-lg">{{$t('email')}}  <pv-button :disabled="showCancel.email" class="orange-button" @click="toggleCancel('email')" :label="$t('change')" link /> <pv-button class="red-button" v-if="showCancel.email" @click="toggleCancel('email')" :label="$t('delete')" link /></p>
            <p class="lg:text-lg text-lg">{{$t('subs')}}  <pv-button :disabled="showCancel.subscription" class="orange-button" @click="toggleCancel('subscription')" :label="$t('change')" link /> <pv-button class="red-button" v-if="showCancel.subscription" @click="toggleCancel('subscription')" :label="$t('delete')" link /></p>
            <p class="lg:text-lg text-lg"> {{$t('artist')}} <pv-button :disabled="showCancel.artist" class="orange-button" @click="toggleCancel('artist')" :label="$t('change')" link /> <pv-button class="red-button" v-if="showCancel.artist" @click="toggleCancel('artist')" :label="$t('delete')" link /></p>
          </div>
    </template>
  </pv-card>
  </div>
  <br/>
  <div class="text-center text-xl" aria-label="Submit and change profile options">
    <pv-button class="blue" :label="$t('submit')" />
    <br/>
    <br/>
    <p class="lg:text-lg text-lg"> {{$t('want')}} <pv-button class="blue-button" :label="$t('changeprofile')" link /></p>
    <br/>
  </div>
  </div>
</template>

<style>

.border {
  border: 2px solid black;
}
 .orange-button {
   color: orange !important;
 }
.red-button {
  color: red !important;
}
.blue-button{
  color: #00B4CC !important;
}
.back{
  background-color: white;
  color: black
}
.blue{
  background-color: #00B4CC;
  color: white;
}

</style>