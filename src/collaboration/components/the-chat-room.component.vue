<script >
import { UserEndpointService } from '@/shared/service/user-endpoint.service.js'
import { Reader } from '@/shared/models/reader.entity.js'
import { ChatService } from '@/collaboration/service/chat.service.js'
import { Chat } from '@/collaboration/models/chat.entity.js'
import { Message } from '@/collaboration/models/message.entity.js'

export default {
  name: 'the-chat-room',
  data() {
    return {
      messageData:new Chat(),
      messages: [],
      newMessage: '',
      userData: new Reader(),
      userService: new UserEndpointService(),
      chatService: new ChatService(),
      currentMessage:''

    }
  },
  methods: {
    sendMessage() {
      this.chatService.createMessages({content:this.currentMessage,chat_id:1,isRead:false, isSend:true }).then(response=>{
           console.log(response.data)
      })
    },
    getArtist() {
      this.userService.getUsers().then((response) => {
        console.log(response.data);
        response.data.forEach((user) => {
          if (user.type === 'artist' && user.name === 'Miriam Bonastre') {
            const { id, name, username, email, password, type, imgUrl, subscription_id } = user;
            this.userData = new Reader(id, name, username, email, password, type, imgUrl, subscription_id);
            console.log(this.userData)
          }
        });
      });
    },
    getChatMessages(){
      this.chatService.getMessages().then(response=>{
         response.data.forEach((message)=>{
           if(message.chat_id === 1){
             const {id,content,chat_id,isRead,isSend} = message;
             this.messageData = new Message(id,content,chat_id,isRead,isSend);
             this.messages.push(this.messageData);
           }
         })
      })
      console.log(this.messages);
    }

  },
  async created() {
    this.userService = new UserEndpointService();
    this.getArtist();
    this.getChatMessages();
  }
}
</script>

<template>

  <div class="flex gap-7 mt-2">
    <div class="controller" aria-label="Controller">

      <div class="flex gap-3" aria-label="Navigation">
        <i class="pi pi-arrow-left text-3xl mt-2" aria-hidden="true"> </i>
        <div class="flex flex-column">
          <h3 class="text-gray-500"> {{$t('chatroom.rooms')}} </h3>
          <h2 class="font-bold"> Chat </h2>
        </div>
      </div>

      <div class="flex justify-content-between" aria-label="User Information">
        <div class="flex">
          <img :src="userData._imgURL" alt="Miriam" width="70" height="70"/>
          <h4 class="mt-3 font-bold"> {{userData._name}} </h4>
        </div>
        <div class="flex gap-3 mt-4">
          <i class="pi pi-phone" aria-hidden="true"> </i>
          <i class="pi pi-video" aria-hidden="true"> </i>
        </div>
      </div>
      <hr class="bg-black-alpha-100"/>
      <div class="my-5" aria-label="Message Section">
        <div v-for="message in messages" :key="message.id" class="flex gap-3" aria-label="Message">
          <div class="flex flex-column">
            <p> {{message.content}} </p>
          </div>
        </div>

        <div class="flex mx-2 gap-2" aria-label="Message Input">
          <i class="pi pi-image mt-2 text-xl" aria-hidden="true"></i>
          <div class="w-full flex p-2 bg-gray-100 border-0 border-transparent border-round-xl ">
            <input v-model="currentMessage" @keyup.enter="sendMessage()" class="w-full bg-gray-100 border-0 border-transparent border-round-xl" aria-label="Type a message"/>
            <i class="pi pi-face-smile text-xl" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="artist-card" aria-label="Artist Card">
      <div class="bg-cyan-100 border-round-lg px-6 flex flex-column gap-3 py-2">
        <img :src="userData._imgURL" alt="Miriam" width="100" height="100"/>
        <h3 class="font-bold text-center">{{userData._name}}</h3>
        <div class="flex  justify-content-center gap-3" aria-label="Profile and Search">
          <div class="flex flex-column justify-content-center">
            <i class="pi pi-user" aria-hidden="true"></i>
            <h4 class="font-bold"> {{$t('chatroom.profile')}} </h4>
          </div>
          <div class="flex flex-column justify-content-center">
            <i class="pi pi-search" aria-hidden="true"></i>
            <h4 class="font-bold"> {{$t('chatroom.search')}} </h4>
          </div>
        </div>
        <div class="flex gap-3" aria-label="Settings">
          <p> {{$t('chatroom.settings')}}</p>
          <i class="pi pi-arrow-right mt-1" aria-hidden="true"></i>
        </div>

      </div>
    </div>

  </div>
</template>
<style >
.controller{
  width:60%;
}

.pi-user{
  margin: 0 auto;
}

.pi-search{
  margin:0 auto;
}


img{
  margin: 0 auto;
}
@media (width<=1024px){
  .controller{
    width:90%;
  }
  .artist-card{
    display:none;
  }
}



</style>