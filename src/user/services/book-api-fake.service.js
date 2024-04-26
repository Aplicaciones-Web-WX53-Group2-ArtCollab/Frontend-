import axios from 'axios';
export class BookApiFake {
  getBook(){
    return axios.get('https://fake-book-store-api.onrender.com/api/books?offset=0&limit=1');
  }

}