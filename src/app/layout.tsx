import type { Metadata } from "next";

import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import "@/styles/globals.css";
import { Footer, Navbar } from "@/components/layout";
import { I18nProvider } from "@/components/providers";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "desarrollo de software Zacatecas",
    "desarrollo web Zacatecas",
    "páginas web Zacatecas",
    "desarrollador web Zacatecas",
    "desarrollador de software Zacatecas",
    "software Zacatecas",
    "aplicaciones web Zacatecas",
    "desarrollo de aplicaciones Zacatecas",
    "Software Engineer Zacatecas",
  ],

  authors: [
    {
      name: "Giovanna Chávez",
    },
  ],

  creator: "Giovanna Chávez",

  metadataBase: new URL("https://gig1s.pages.dev"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Giovanna Chávez | Desarrollo de Software en Zacatecas",
    description: "Desarrollo de software, páginas web y aplicaciones web y móviles en Zacatecas.",
    url: "https://gig1s.pages.dev",
    siteName: "Giovanna Chávez",
    locale: "es_MX",
    type: "website",
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
