import axios from 'axios';
const API_URL = 'http://localhost:8080'

class BuildingService {
    retrieveAllBuildings() {
        return axios.get(`${API_URL}/api/buildings`);
    }
}
export default new BuildingService()