import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stock Image",
  description: "Stock Image platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="w-100">{children}</body>
    </html>
  );
}
