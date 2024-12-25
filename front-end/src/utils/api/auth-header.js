export default function authHeader() {
    const token = localStorage.getItem('Unimakler-Authorization')
    console.log("Token", token);
    if (token) {
        return { Authorization: 'Bearer ' + token };
    } else {
        return {};
    }
}