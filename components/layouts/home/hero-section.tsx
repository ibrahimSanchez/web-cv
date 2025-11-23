import { HeroDecoration } from "./hero/hero-decoration"
import { HeroParticles } from "./hero/hero-particles"
import { HeroBody } from "./hero/hero-body"

export function HeroSection() {

  return (
    <section 
      id="home" 
      className="pt-32 pb-20 px-4 bg-linear-to-b from-primary/5 via-background to-background relative overflow-hidden"
    >
      <HeroDecoration />
      <HeroBody />
      <HeroParticles />
    </section>
  )
}