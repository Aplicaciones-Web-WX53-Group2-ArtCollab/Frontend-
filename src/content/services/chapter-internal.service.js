import axios from 'axios'
const http = axios.create({
  baseURL: 'https://6633c60ff7d50bbd9b4a9f24.mockapi.io'
})
export class BookInternalService {
  getAllChapters() {
    return http.get('/chapter')
  }
  getchapterById(id) {
    return http.get('/chapter/' + id);
  }
  createChapter(body) {
    return http.post('/chapter', body)
  }
  updateChapter(id, updateObject) {
    return http.put('/chapter/' + id, updateObject)
  }
}