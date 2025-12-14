import { useState } from "react";
import { apiClient } from "../api/client";

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = await apiClient("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });

    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);

    onLogin();
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
