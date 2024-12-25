import http from "../http-common";
import authHeader from '../auth-header';

const masterHttp = http('master');
class MasterService {
    getStates() {
        return masterHttp.get("/state", { headers: authHeader() });
    }

    getStatesByCountry(code) {
        return masterHttp.get("/state/" + code, { headers: authHeader() });
    }

    getCities() {
        return masterHttp.get("/city", { headers: authHeader() });
    }

    getCitiesByState(code) {
        return masterHttp.get("/city/" + code, { headers: authHeader() });
    }

    getCityLocality() {
        return masterHttp.get("/locality", { headers: authHeader() });
    }

    getCityLocalityCity(code) {
        return masterHttp.get("/locality/" + code, { headers: authHeader() });
    }

    getBuilders() {
        return masterHttp.get("/builder", { headers: authHeader() });
    }

    getRoles() {
        return masterHttp.get("/roles", { headers: authHeader() });
    }

    getPermissions() {
        return masterHttp.get("/permissions", { headers: authHeader() });
    }

    addPermissions(data) {
        return masterHttp.post("/permissions", data, { headers: authHeader() });
    }

    getModules() {
        return masterHttp.get("/modules", { headers: authHeader() });
    }
}

export default new MasterService();