import axios from 'axios';
export class BookApiFake {
  getBookOne(){
    return axios.get('https://fake-book-store-api.onrender.com/api/books/65a9b9d922d2eb408ca77cec');
  }
  getBookTwo(){
    return axios.get('https://fake-book-store-api.onrender.com/api/books/65a9ba2d22d2eb408ca77cef');
  }
}