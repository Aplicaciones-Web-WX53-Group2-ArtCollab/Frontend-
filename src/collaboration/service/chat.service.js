import axios from 'axios'

export class ChatService{
    baseUrl = 'https://6633c60ff7d50bbd9b4a9f24.mockapi.io'
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