import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, Star, Users, Trophy } from "lucide-react"

function GuideStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className=" flex items-center gap-3 rounded-xl border border-border bg-card p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">{icon}</div>
      <div>
        <div className="text-sm font-semibold text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}

export function Stats() {
  return (
    <div className="cosmic-subtle rounded-3xl  p-6 text-center shadow-sm">
      <Badge variant="secondary" className="border border-border">
        Meet Your Cosmic Guide
      </Badge>

      <h2 className="mt-3 text-balance text-2xl font-semibold text-foreground md:text-3xl">
        Meet Your Cosmic Guide
      </h2>

      <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
        With over 15 years of experience in Vedic Astrology, I have dedicated my life to helping individuals discover their true potential through the ancient wisdom of the stars. My journey began in the sacred temples of India, where I studied under renowned masters of astrological sciences.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <GuideStat icon={<Users className="h-5 w-5" />} value="2000+" label="Happy Clients Guided" />
        <GuideStat icon={<Star className="h-5 w-5" />} value="4.9★" label="Average Rating" />
        <GuideStat icon={<Calendar className="h-5 w-5" />} value="25+" label="Years Served" />
      </div>
    </div>
  )
}
