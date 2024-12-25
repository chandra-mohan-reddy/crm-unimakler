import loginServices from './api/services/login.services';

export async function useAuthentication() {
    try {
        const response = await loginServices.checkToken();

        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error during authentication:', error);
        return false;
    }
}
