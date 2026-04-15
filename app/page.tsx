import { Navbar } from "@/components/law-firm/navbar"
import { Hero } from "@/components/law-firm/hero"
import { About } from "@/components/law-firm/about"
import { Services } from "@/components/law-firm/services"
import { Team } from "@/components/law-firm/team"
import { Insights } from "@/components/law-firm/insights"
import { Contact } from "@/components/law-firm/contact"
import { Footer } from "@/components/law-firm/footer"

export default function LawFirmPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
    
      <Team />
      <Insights />
      <Contact />
      <Footer />
    </main>
  )
}
