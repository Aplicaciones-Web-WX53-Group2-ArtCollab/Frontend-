import axios from 'axios'

export class ChatService{
    baseUrl = 'https://art-collab.azurewebsites.net/api/v1'
    chatUrl = '/chat'


    getChatById(id){
        return axios.get(`${this.baseUrl}${this.chatUrl}/${id}`)
    }

    createMessages(chat){
        return axios.post(`${this.baseUrl}/message`, chat)
    }

    getMessages(){
        return axios.get(`${this.baseUrl}/message`)
    }

    deleteChatRoom(id){
        return axios.delete(`${this.baseUrl}${this.chatUrl}/${id}`)
    }
}