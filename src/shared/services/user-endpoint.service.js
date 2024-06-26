import axios from 'axios'

const http = axios.create({
  baseURL: 'https://art-collab.azurewebsites.net/api/v1/reader',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
})
export class UserEndpointService {

  getUsers(){
    return http.get('/reader')
  }
  getUserById(id){
    return http.get(`/reader/${id}`)
  }

  createUser(reader){
    return http.post('/reader', reader)
  }


}