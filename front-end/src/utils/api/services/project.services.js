import http from "../http-common";
import authHeader from '../auth-header';

class ProjectService {
    getUnAssignedProjects() {
        return http.get("/unassignedprojects", { headers: authHeader() });
    }

    getAssignedProjects() {
        return http.get("/assignedprojects", { headers: authHeader() });
    }

    assignProjectToUser(data) {
        return http.post("/mapuserproject", data, { headers: authHeader() });
    }

    assignSelectedUsers(data) {
        return http.post("/assignselectedusers", data, { headers: authHeader() });
    }

    unAssignSelectedUsers(data) {
        return http.post("/unassignselectedusers", data, { headers: authHeader() });
    }

    getBuilderProjects() {
        return http.get("/getprojects", { headers: authHeader() });
    }
}

export default new ProjectService();