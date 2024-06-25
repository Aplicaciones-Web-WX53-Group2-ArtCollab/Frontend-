import axios from 'axios'
const http = axios.create({
    baseURL: 'https://6633c60ff7d50bbd9b4a9f24.mockapi.io',
    headers: {
        'Authorization': 'Bearer' + localStorage.getItem('jwt')
    }
})
export class BookInternalService {
    getAllBooks() {
        return http.get('/template')
    }
    getBookById(id) {
        return http.get('/template/' + id);
    }
    increaseLike(id, like){
        return http.patch('/template/' + id, {likes: like+1})
    }
    create(body) {
        return http.post('/template', body)
    }
    updateBook(id, updateObject) {
        return http.put('/template/' + id, updateObject)
    }
}