import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://partido-de-los-34.annieacosta.chatgpt.site"),
  title: "El Partido de los 34 | Portugal Edition",
  description: "Convocatoria oficial al cumpleaños número 34, con inspiración Portugal y Cristiano Ronaldo.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "El Partido de los 34 · Portugal Edition", description: "Sábado 25 de julio · 5:00 p.m. · Callejón del Rosarito #2", type: "website", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "El Partido de los 34 · Portugal Edition" }] },
  twitter: { card: "summary_large_image", title: "El Partido de los 34 · Portugal Edition", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
