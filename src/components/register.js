import React from "react";
import authService from "../services/authService";
import "../styles/Login.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    authService
      .register(email, password)
      .then(() => {
        // Đăng nhập thành công, reload trang
        window.location.reload();
      })
      .catch((error) => {
        // Xử lý lỗi đăng nhập
        this.setState({ error: "Đăng ký thất bại" });
      });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="login-container">
        <h1>Become A Member</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Register Now</button>
        </form>
      </div>
    );
  }
}

export default Register;
