import axios from 'axios'
const http = axios.create({
    baseURL: 'http://localhost:3000'
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