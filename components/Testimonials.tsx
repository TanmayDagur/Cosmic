"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"
import Loader from "./loader"

interface Testimonial {
  name: string
  feedback: string
  imageUrl: string
}


function AutoplayPlugin(ms: number) {
  return (slider: any) => {
    let timeout: any
    let mouseOver = false

    function clearNextTimeout() {
      clearTimeout(timeout)
    }

    function nextTimeout() {
      clearTimeout(timeout)
      if (mouseOver) return
      timeout = setTimeout(() => {
        slider.next()
      }, ms)
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true
        clearNextTimeout()
      })
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false
        nextTimeout()
      })
      nextTimeout()
    })
    slider.on("dragStarted", clearNextTimeout)
    slider.on("animationEnded", nextTimeout)
    slider.on("updated", nextTimeout)
  }
}

export function Testimonials() {
  const [data, setData] = useState<Testimonial[]>([])

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 3, spacing: 16 },
      breakpoints: {
        "(max-width: 1024px)": { slides: { perView: 2, spacing: 14 } },
        "(max-width: 640px)": { slides: { perView: 1, spacing: 12 } },
      },
    },
    [AutoplayPlugin(2500)] 
  )

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/testimonials", { cache: "no-store" })
      const json = await res.json()
      setData(json)
    }
    fetchData()
  }, [])
console.log(data)

  if (data.length === 0) return <Loader />

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="text-center">
        <Badge variant="secondary" className="rounded-full">
          Client Testimonials
        </Badge>
        <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
          What Our Clients Say About Us
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Real stories from those we’ve guided with clarity and purpose.
        </p>
      </div>

      <div ref={sliderRef} className="keen-slider mt-10">
        {data.map((t, idx) => (
          <div key={idx} className="keen-slider__slide">
            <figure className="flex flex-col items-center rounded-xl border border-border bg-card p-6 shadow-md">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-primary/30">
                <Image
                  src={t.imageUrl}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <blockquote className="mt-4 text-center text-sm text-muted-foreground italic">
                <Quote className="mx-auto mb-2 h-5 w-5 text-primary opacity-70" />
                {t.feedback}
              </blockquote>
              <figcaption className="mt-3 font-semibold text-foreground">
                {t.name}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  )
}
