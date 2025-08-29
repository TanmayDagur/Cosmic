"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

export function Offer() {
  const deadline = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 3)
    return d.getTime()
  }, [])
  const [left, setLeft] = useState(getLeft(deadline))
  useEffect(() => {
    const id = setInterval(() => setLeft(getLeft(deadline)), 1000)
    return () => clearInterval(id)
  }, [deadline])

  const boxes = [
    { k: "Days", v: left.days },
    { k: "Hours", v: left.hours },
    { k: "Mins", v: left.minutes },
    { k: "Secs", v: left.seconds },
  ]

  return (
    <section className="px-6 cosmic-gradient  mx-auto max-w-9xl border border-border p-8 ">
      <div className=" text-center">
        <p className="text-xs text-muted-foreground">Join Our Webinar</p>
        <h3 className="mt-1 text-2xl font-semibold">
          Limited‑Time Offer!
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Get exclusive access to our upcoming 4‑session live series. Act fast – this offer expires in:
        </p>

        <div className="mx-auto mt-6 grid max-w-md grid-cols-4 gap-3">
          {boxes.map((b) => (
            <div key={b.k} className="rounded-lg border border-border bg-background px-4 py-3">
              <div className="text-xl font-semibold tabular-nums">{pad(b.v)}</div>
              <div className="text-[10px] text-muted-foreground">{b.k}</div>
            </div>
          ))}
        </div>

        <Button className="mt-6">Visit Now</Button>
      </div>
    </section>
  )
}

function getLeft(d: number) {
  const t = Math.max(0, d - Date.now())
  return {
    days: Math.floor(t / 86400000),
    hours: Math.floor((t / 3600000) % 24),
    minutes: Math.floor((t / 60000) % 60),
    seconds: Math.floor((t / 1000) % 60),
  }
}
function pad(n: number) {
  return n.toString().padStart(2, "0")
}
