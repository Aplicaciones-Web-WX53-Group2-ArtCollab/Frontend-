import axios from 'axios';
export class BookApiFake {

  getAllBooks(){
    return axios.get('https://fake-book-store-api.onrender.com/api/books')
  }
  getRomanceBooks() {
    return axios.get('https://fake-book-store-api.onrender.com/api/categories/65a86faecc61cd97ff280d45/books')
  }
  getFantasyBooks(){
    return axios.get('https://fake-book-store-api.onrender.com/api/categories/65a86faecc61cd97ff280d42/books')
  }
  getComedyBooks(){
    return axios.get('https://fake-book-store-api.onrender.com/api/categories/65a86faecc61cd97ff280d44/books')
  }
}