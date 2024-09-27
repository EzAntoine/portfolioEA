import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Ezequiel Antoine",
  description:
    "Desarrollador con experiencia en JavaScript, NodeJs, NestJs React y NextJs.",
  image: "/preview.png",
  type: "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
