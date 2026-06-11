"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setError("");

    const endpoint = mode === "login" ? "/auth/login" : "/auth/register";

    const res = await api.post(endpoint, { email, password });

    if (res.error) {
      setError(res.error);
      return;
    }

    localStorage.setItem("user", JSON.stringify(res.user));
    localStorage.setItem("token", res.token);

    window.location.href = "/dashboard";
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold">
        {mode === "login" ? "Connexion" : "Créer un compte"}
      </h1>

      {error && <p className="text-red-600">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        className="w-full border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded">
        {mode === "login" ? "Se connecter" : "Créer un compte"}
      </button>
    </form>
  );
}
