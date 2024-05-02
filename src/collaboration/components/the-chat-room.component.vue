<script >

export default {
  name: 'the-chat-room',
  data() {
  return {
    messages: [
      { sender: 'User 1', text: 'Lorem ipsum dolor sit amet' },
      { sender: 'You', text: 'Consectetur adipiscing elit' },
      { sender: 'User 1', text: 'Sed do eiusmod tempor incididunt' },
      { sender: 'You', text: 'Ut labore et dolore magna aliqua' }
    ],
    newMessage: ''
  }
},
methods: {
  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ sender: 'You', text: this.newMessage });
      this.newMessage = '';
    }
  }
}
}
</script>

<template>

  <pv-toolbar class="flex border-noround text-white-alpha-90 bg-white">
    <template #start class="flex justify-content-start">
      <div class="flex justify-content-start">
        <pv-button icon="pi pi-chevron-left" class="text-black-alpha-90 border-none bg-transparent"></pv-button>
        <div class="text-black-alpha-90">
          <p class="text-xl">{{$t('room')}}</p>
        </div>
      </div>
    </template>
    <hr/>
  </pv-toolbar>
  <div class="bg-white flex justify-content-between">
    <div class="text-black-alpha-90 width">
      <div>
        <h1 class="text-black-alpha-90 text-2xl ml-6">Chat</h1>
        <div class=" flex justify-content-between">
          <div class="flex">
          <img class="ml-6" src="/src/assets/miriam.png" alt="Artistas" width="40" height="48" />
          <p class="text-lg">Miriam Bonastre</p>
        </div>
          <div class="ml-8">
            <i class="pi pi-phone"></i>
            <i class="pi pi-camera"></i>
          </div>
        </div>
      </div>
      <hr/>
      <div class="ml-8 chat-container">
        <div v-for="(message, index) in messages" :key="index" :class="{'message-user1': message.sender === 'User 1', 'message-you': message.sender === 'You'}">
          <p><strong>{{ message.sender }}:</strong> {{ message.text }}</p>
        </div>
        <input type="text" v-model="newMessage" @keyup.enter="sendMessage" class="input-message">
      </div>
    </div>
  <div class="cyan border-round-2xl">
    <div class="column-gap-0">
      <img class="ml-6" src="/src/assets/miriam.png" alt="Artistas" width="186" height="189" />
      <h1 class="text-black-alpha-90 ml-4">Miriam Bonastre</h1>
      <div class="flex mt-4">
        <i class="pi pi-user mr-2 text-black-alpha-90 text-xl ml-8"></i>
        <i class="pi pi-search text-black-alpha-90 text-xl ml-6"></i>
      </div>
      <div class="flex">
        <p class="text-black-alpha-90 text-lg ml-7">{{$t('profile')}}</p>
        <p class="text-black-alpha-90 text-lg ml-6">{{$t('search')}}</p>
      </div>
      <div class="flex mt-4">
        <p class="text-black-alpha-90 text-lg">{{$t('settings')}}</p>
        <pv-button icon="pi pi-chevron-right" class="text-black-alpha-90 border-none bg-transparent"></pv-button>

      </div>
    </div>
    </div>
  </div>
</template>
<style >
.cyan{
  background-color: #11AEBF;
}
.width {
  width: 100%;
}
.chat-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.message-user1 {
  align-self: flex-start;
}

.message-you {
  align-self: flex-end;
}

.input-message {
  width: 100%;
  position: absolute;
  bottom: 120px;
}
</style>