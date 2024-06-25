import axios from 'axios'

const http = axios.create({
    baseURL: 'https://art-collab.azurewebsites.net/api/v1/collaboration',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
})
export class CommentService {

    createMessages(chat){
        return http.post(`/comment`, chat)
    }

    getMessages(){
        return axios.get(`/comment`)
    }

}