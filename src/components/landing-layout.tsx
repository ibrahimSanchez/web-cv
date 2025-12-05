import { FloatingScrollToTop } from "./floating-scroll-to-top"
import { Footer } from "./footer"
import { Navbar } from "./navbar"

export default function LandingLayout({
  children,
  className = "",
}: {
  children?: React.ReactNode,
  className?: string
}) {
  return (
    <main className={className}>
        <Navbar />
        {children}
        <FloatingScrollToTop 
        threshold={200}
        position="bottom-right"
        />
        <Footer />
    </main>
  )
}