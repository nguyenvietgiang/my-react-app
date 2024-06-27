import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import authService from "./services/authService";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = authService.getToken();
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    // Chuyển hướng đến trang đăng nhập
    navigate("/login");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/CharacterList">
          <img
            src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
            alt="Logo"
            width="300"
            height="150"
          />
        </Link>
        {isLoggedIn ? (
          <div>
            <Link to="/CharacterList" className="link">
              Character List
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/register" className="link">
            Register
          </Link>
        )}
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <Navigate to="/CharacterList" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/CharacterList"
              element={
                isLoggedIn ? <CharacterList /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/CharacterDetail/:id"
              element={
                isLoggedIn ? <CharacterDetail /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/register"
              element={
                !isLoggedIn ? <Register /> : <Navigate to="/CharacterList" />
              }
            />
            <Route
              path="/login"
              element={
                !isLoggedIn ? <Login /> : <Navigate to="/CharacterList" />
              }
            />
            <Route
              path="/about"
              element={
                !isLoggedIn ? <Login /> : <Navigate to="/CharacterList" />
              }
            />
          </Routes>
        </div>
        <h2>
          <strong>@2023 by Rick and Morty</strong>
        </h2>
        <h3>Design by Nguyen Viet Giang</h3>
        <h3>--My First React App--</h3>
      </header>
    </div>
  );
}

export default App;
