import axios from 'axios'
const http = axios.create({
  baseURL: 'http://localhost:3000'
})
export class PotfolioEndpoint {
  getAllPortfolios(){
    return http.get('/portfolio')
  }

}