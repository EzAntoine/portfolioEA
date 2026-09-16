import "./globals.css";

const siteUrl = "https://ezequielantoine.vercel.app";
const title = "Ezequiel Antoine | Desarrollador web full stack";
const description =
  "Ezequiel Antoine, desarrollador web full stack y programador. Desarrollo sitios y aplicaciones con React, Next.js, TypeScript y Node.js. Conocé mis proyectos y experiencia.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Portfolio de Ezequiel Antoine",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/preview.png", alt: "Portfolio de Ezequiel Antoine" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/preview.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body className="font-sans">{children}</body>
    </html>
  );
}
