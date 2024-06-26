import axios from 'axios'
const http = axios.create({
    baseURL: 'https://art-collab.azurewebsites.net/api/v1/content',
    localStorage: localStorage.setItem('token','eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTk5NTI5MDQsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZ3VzdGF2bzEyIiwiaWF0IjoxNzE5MzQ4MTA0LCJuYmYiOjE3MTkzNDgxMDR9.7m-JOueWg38U0L2z8m84yrWruKQ8Ew-kyoGtefwIyYs'),
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
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