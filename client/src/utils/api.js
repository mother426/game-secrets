import axios from "axios";

const api = {
    login: (data) => axios.post('/api/user/login', data),
    logout: () => axios.post('/api/user/logout'),
    searchByTitle: (query) => axios.post('/api/posts/findsecrets', query),
    signup: (data) => axios.post('api/user', data),
}

export default api;