import AdminLayout from "@/src/components/andmin-layout";
import type React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <AdminLayout>
        {children}
      </AdminLayout>
    </main>
  )
}
