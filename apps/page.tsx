export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur Staycation</h1>
      <p className="text-gray-600">Votre SaaS minimal est opérationnel.</p>

      <div className="mt-6 space-x-4">
        <a href="/login" className="text-blue-600 underline">Se connecter</a>
        <a href="/register" className="text-blue-600 underline">Créer un compte</a>
      </div>
    </div>
  );
}
