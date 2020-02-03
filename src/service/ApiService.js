import axios from 'axios';

class ApiService {

    upload(data) {
        return axios.post("http://localhost:8080/api/participante", data);
    }
}

export default new ApiService();