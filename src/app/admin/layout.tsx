import type { Metadata } from "next";

import { WrapperSidebar } from "@/components/layout";

export const metadata: Metadata = {
  title: "Administarator",
  description: "Gestion de contenido",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex">
      <WrapperSidebar>
          {children}
      </WrapperSidebar>
    </div>
  );
}
