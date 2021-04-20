import axios from "axios";

const api = {
    login: (data) => axios.post('/api/user/login', data)
}

export default api;