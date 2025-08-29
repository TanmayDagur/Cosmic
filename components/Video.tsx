"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export function Video() {
  const videos = new Array(8).fill(0).map((_, i) => ({
    id: i,
    title: "Understanding Your Birth Chart",
    duration: "12:45",
  }))

  return (
    <section className="cosmic-subtle max-w-9xl p-8 -mx-6 gap-6">
      <div className="mb-6 text-center">
        <Badge variant="secondary" className="border border-border">
          New Session
        </Badge>
        <h2 className="mt-3 text-balance text-2xl font-semibold text-foreground md:text-3xl">Video Wisdom</h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Explore astrology through our comprehensive video library with practical guidance for your spiritual journey.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Button className="shadow">Trending Video</Button>
          <Button variant="outline">Popular Video</Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((v) => (
          <Card key={v.id} className="rounded-2xl border border-border p-4">
            <div className="aspect-video w-full rounded-lg bg-muted" />
            <div className="mt-3 space-y-1">
              <h3 className="line-clamp-1 text-sm font-semibold text-foreground">{v.title}</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{v.duration}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
