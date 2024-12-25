import http from "../http-common";
import authHeader from '../auth-header';

class LeadsService {
    getDashboard() {
        return http.get("/dashboard", { headers: authHeader() });
    }

    getLeads() {
        return http.get("/leads", { headers: authHeader() });
    }

    getDropoutLeads() {
        return http.get("/dropleads", { headers: authHeader() });
    }

    addLead(data) {
        return http.post("/leads", data, { headers: authHeader() });
    }

    getLead(id) {
        return http.get("/leads/" + id, { headers: authHeader() });
    }

    getLeadHistory(id) {
        return http.get("/leadshistory/" + id, { headers: authHeader() });
    }

    getDropoutLeadDetails(id) {
        return http.get("/dropoutleaddetails/" + id, { headers: authHeader() });
    }
}

export default new LeadsService();