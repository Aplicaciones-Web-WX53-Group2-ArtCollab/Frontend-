import axios from 'axios'

const http = axios.create({
  baseURL: 'https://fake-book-store-api.onrender.com/api',
})


export class BookExternalService {
  getRomanceBooks() {
    return http.get('/categories/65a86faecc61cd97ff280d45/books');
  }
  getFantasyBooks(){
    return http.get('/categories/65a86faecc61cd97ff280d42/books');
  }
  getComedyBooks(){
    return http.get('/categories/65a86faecc61cd97ff280d44/books');
  }
}