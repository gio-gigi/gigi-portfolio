import type { Metadata } from "next";


import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import "@/styles/globals.css";
import { Footer, Navbar } from "@/components/layout";
import { I18nProvider } from "@/components/providers";


export const metadata: Metadata = {
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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