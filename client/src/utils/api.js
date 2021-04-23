import axios from "axios";

const api = {
    login: (data) => axios.post('/api/user/login', data),
    logout: () => axios.post('/api/user/logout'),
    searchByTitle: (query) => axios.post('/api/posts/findsecrets', query),
    // searchYourPosts: (id) => axios.post('api/posts/' + id),
    signup: (data) => axios.post('api/user', data),
    createPost: (data) => axios.post('api/posts', data),
    deletePost: (id) => axios.delete('/api/posts/' + id)
}

export default api;