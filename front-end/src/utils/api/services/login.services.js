import http from "../http-common";
import authHeader from '../auth-header';

const loginHttp = http('auth');
class LoginService {

    checkToken() {
        return loginHttp.post("validate-token", "", { headers: authHeader() });
    }

    checklogin(data) {
        return loginHttp.post("/userlogin", data);
    }

    logout() {
        return loginHttp.get("/userlogout", { headers: authHeader() });
    }
}

export default new LoginService();