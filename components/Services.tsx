import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Briefcase, Sun, Home, Gem, Compass, Sparkles } from "lucide-react"

const services = [
  { Icon: BookOpen, title: "Birth Chart Reading", desc: "Complete natal analysis revealing strengths & growth paths." },
  { Icon: Heart, title: "Love & Relationships", desc: "Compatibility, timing, and harmony for lasting bonds." },
  { Icon: Briefcase, title: "Career Guidance", desc: "Navigate pivotal work decisions with clarity." },
  { Icon: Sun, title: "Vedic Astrology", desc: "Align actions with cosmic rhythms and dharma." },
  { Icon: Home, title: "Vastu Consultation", desc: "Balance and energize living and workspaces." },
  { Icon: Gem, title: "Gemstone Therapy", desc: "Remedies chosen for your chart to amplify positivity." },
  { Icon: Compass, title: "Muhurta Selection", desc: "Auspicious timings for key life events and launches." },
  { Icon: Sparkles, title: "Spiritual Guidance", desc: "Tailored sadhana and practices for growth." },
]

export function Services() {
  return (
    <section className=" cosmic-gradient max-w-9xl border border-border p-8 -mx-6">

      <div className="mb-8 text-center max-w-6xl mx-auto">
        <Badge variant="secondary" className="border border-border">
          Astrological Services
        </Badge>
        <h2 className="mt-3 text-balance text-2xl font-semibold text-foreground md:text-3xl">
          Comprehensive Cosmic Services
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Discover a wide range of astrological services designed to illuminate your path, enhance your well-being, and guide you towards your highest potential.
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map(({ Icon, title, desc }) => (
            <Card key={title} className="h-full rounded-2xl p-4">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
