"use client";

export default function AdminLayout({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
    
  return (
    <div className={className}>
        { children }
    </div>
  );
}