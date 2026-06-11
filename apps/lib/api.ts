export const api = {
  async post(path: string, body: any) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      return await res.json();
    } catch (err) {
      return { error: "Erreur de connexion au serveur" };
    }
  },
};
