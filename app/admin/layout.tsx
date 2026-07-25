import AdminLayout from "@/src/components/admin-layout";
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
