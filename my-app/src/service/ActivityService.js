import axios from 'axios';
const API_URL = 'http://localhost:8080'

class ActivityService {
    retrieveAllActivities() {
        return axios.get(`${API_URL}/api/activities`);
    }

    retrieveTodoById(id) {
        return axios.get(`${API_URL}/api/activities/${id}`);
    }

    updateActivity(id, activity) {
          return axios.put(`${API_URL}/api/update/${id}`, activity);
    }

    createActivity(activity) {
          return axios.post(`${API_URL}/api/add/`, activity);
    }

    deleteActivity(id){
        return axios.delete(`${API_URL}/api/delete/${id}`);
    }
}
export default new ActivityService()