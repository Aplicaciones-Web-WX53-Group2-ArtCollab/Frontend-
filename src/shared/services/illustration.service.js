import axios from 'axios'
const http = axios.create({
  baseURL: 'https://6633c60ff7d50bbd9b4a9f24.mockapi.io',
  headers: {
    'Authorization': 'Bearer' + localStorage.getItem('jwt')
  }
})
export class IllustrationService {
  getAllContent() {
    return http.get('/template')
  }
}