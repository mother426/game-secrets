import axios from "axios";

const api = {
    login: (data) => axios.post('/api/user/login', data),

    signup: (data) => axios.post('api/user', data)

    logout: () => axios.post('/api/user/logout')

}

export default api;