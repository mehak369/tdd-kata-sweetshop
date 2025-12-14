import { useState } from "react";
import { apiClient } from "../api/client";

type Props = {
  onRegisterSuccess: () => void;
};

export default function Register({ onRegisterSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await apiClient("/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password })
      });

      alert("Registered successfully. Please login.");
      onRegisterSuccess();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
