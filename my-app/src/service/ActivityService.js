import axios from 'axios';
const API_URL = 'http://localhost:8080'

class ActivityService {
    retrieveAllActivities() {
        return axios.get(`${API_URL}/api/activities`);
    }

    deleteActivity(id){
        return axios.delete(`${API_URL}/api/delete/${id}`);
    }
}
export default new ActivityService()