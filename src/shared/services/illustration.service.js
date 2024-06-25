import axios from 'axios'
const http = axios.create({
  baseURL: 'https://art-collab.azurewebsites.net/api/v1',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
})
export class IllustrationService {
  getAllContent() {
    return http.get('/template')
  }
}