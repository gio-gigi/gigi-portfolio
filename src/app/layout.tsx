import type { Metadata } from "next";

import { SITE_NAME } from "@/lib/constants";
import "@/styles/globals.css";
import { Footer, Navbar } from "@/components/layout";
import { I18nProvider } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://gig1s.pages.dev"),

  title: {
    default: "Giovanna Chávez | Software Engineer en Zacatecas",
    template: `%s · ${SITE_NAME}`,
  },

  description:
    "Giovanna Chávez, Software Engineer en Zacatecas. Desarrollo de software, páginas web y aplicaciones web y móviles.",

  keywords: [
    "Giovanna Chávez",
    "Software Engineer Zacatecas",
    "desarrolladora de software Zacatecas",
    "desarrollador web Zacatecas",
    "desarrollo de software Zacatecas",
    "desarrollo web Zacatecas",
    "páginas web Zacatecas",
    "aplicaciones web Zacatecas",
    "aplicaciones móviles Zacatecas",
    "React Zacatecas",
    "Next.js Zacatecas",
    "React Native Zacatecas",
  ],

  authors: [
    {
      name: "Giovanna Chávez",
    },
  ],

  creator: "Giovanna Chávez",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Giovanna Chávez | Software Engineer en Zacatecas",
    description: "Desarrollo de software, páginas web y aplicaciones web y móviles en Zacatecas.",
    url: "https://gig1s.pages.dev",
    siteName: "Giovanna Chávez",
    locale: "es_MX",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <I18nProvider>
          <Navbar />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
