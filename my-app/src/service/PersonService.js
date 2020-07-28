import axios from 'axios';
const API_URL = 'http://localhost:8080'

class PersonService {
    retrieveAllPersons() {
        return axios.get(`${API_URL}/api/persons`);
    }
}
export default new PersonService()