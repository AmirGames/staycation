"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (!u) window.location.href = "/login";
    else setUser(JSON.parse(u));
  }, []);

  if (!user) return <p>Chargement...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2">Bienvenue, {user.email}</p>
    </div>
  );
}
