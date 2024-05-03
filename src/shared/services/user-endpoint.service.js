import axios from 'axios'

export class UserEndpointService {
  baseUrl = 'https://6633c60ff7d50bbd9b4a9f24.mockapi.io'
  readerUrl = '/reader'
  loginUrl = '/login'

  getUsers(){
    return axios.get(`${this.baseUrl}${this.readerUrl}`)
  }

  getUserById(id){
    return axios.get(`${this.baseUrl}${this.readerUrl}/${id}`)
  }

  createUser(reader){
    return axios.post(`${this.baseUrl}${this.readerUrl}`, reader)
  }

  loginUser(reader){
    return axios.post(`${this.baseUrl}${this.loginUrl}`, reader)
  }

  getLoggedInUser(){
    return axios.get(`${this.baseUrl}${this.loginUrl}`)
  }
}