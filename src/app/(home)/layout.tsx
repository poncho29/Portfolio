import type { Metadata } from "next";

import { Footer, Header } from "@/components/layout";

export const metadata: Metadata = {
  title: "Sebastián Meneses | Desarrollador Front-end",
  description: "Portafolio personal de desarrollador front-end con React.js y Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      
      <main className="max-w-7xl mx-auto p-6 ">
        {children}
      </main>

      <Footer />
    </>
  );
}
