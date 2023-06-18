import axios from 'axios';

class AuthService {
  login(email, password) {
    return axios
      .post('https://reqres.in/api/login', { email, password })
      .then(response => {
        const { token } = response.data;
        // Lưu token vào cookie
        document.cookie = `token=${token}; path=/`;
      });
  }

  getToken() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('token=')) {
        return cookie.substring('token='.length, cookie.length);
      }
    }
    return null;
  }

  logout() {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
}

const authService = new AuthService();
export default authService;
