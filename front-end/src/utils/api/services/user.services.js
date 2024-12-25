import http from "../http-common";
import authHeader from '../auth-header';

const userHttp = http('user');
class UserService {
    getUsers() {
        return http.get("/user", { headers: authHeader() });
    }

    getUserDetails(id) {
        return http.get("/user/" + id, { headers: authHeader() });
    }

    addUsers(data) {
        return http.post("/user", data, { headers: authHeader() });
    }

    deleteUser(id) {
        return http.delete("/user/" + id, { headers: authHeader() });
    }

    getUnassignedUsers(id) {
        return http.get("/unassignedusers/" + id, { headers: authHeader() });
    }

    getAssignedUsers(id) {
        return http.get("/assignedusers/" + id, { headers: authHeader() });
    }

    getFranchise() {
        return userHttp.get("/franchise", { headers: authHeader() });
    }
}

export default new UserService();