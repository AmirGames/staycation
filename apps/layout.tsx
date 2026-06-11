export const metadata = {
  title: "Staycation Minimal",
  description: "Frontend minimal pour Staycation SaaS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-900">
        <div className="max-w-xl mx-auto py-10">{children}</div>
      </body>
    </html>
  );
}
