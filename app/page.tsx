
import { Hero } from "@/components/hero"
import { Offer } from "@/components/Offer"
import { Services } from "@/components/Services"
import { Footer } from "@/components/footer"
import { Stats } from "@/components/Stats"
import { Testimonials } from "@/components/Testimonials"
import { Video } from "@/components/Video"

export default function Page() {
  return (
    <main className="space-y-16">
      <Hero />
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <Stats />
        </div>
      </section>

      <section className="px-6">
        <Services />
      </section>

      <section className="bg-muted/30 px-6 py-16">
        <Video />
      </section>

      <Testimonials />

      <Offer />

      <Footer />
    </main>
  )
}
