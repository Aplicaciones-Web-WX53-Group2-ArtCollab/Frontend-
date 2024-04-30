import axios from 'axios'

export class UserEndpoint {
  baseUrl = 'http://localhost:3000'
  readerUrl = '/reader'
  loginUrl = '/login'

  getReaders(){
    return axios.get(`${this.baseUrl}${this.readerUrl}`)
  }

  getReaderById(id){
    return axios.get(`${this.baseUrl}${this.readerUrl}/${id}`)
  }

  createReader(reader){
    return axios.post(`${this.baseUrl}${this.readerUrl}`, reader)
  }


}