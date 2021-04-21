import axios from "axios";

const api = {
    login: (data) => axios.post('/api/user/login', data),
    signup: (data) => axios.post('api/user', data)
}

export default api;