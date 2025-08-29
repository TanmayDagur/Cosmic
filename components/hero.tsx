"use client"

import type React from "react"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Phone, Sparkles, BadgeCheck, ThumbsUp, Star, ShieldCheck } from "lucide-react"
import { useEffect, useState } from "react"
import Loader from "./loader"



function FourPointStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2c.5 2.8 1.9 4.2 4.7 4.7C13.9 7.2 12.5 8.6 12 11.4 11.5 8.6 10.1 7.2 7.3 6.7 10.1 6.2 11.5 4.8 12 2zM12 22c-.5-2.8-1.9-4.2-4.7-4.7 2.8-.5 4.2-1.9 4.7-4.7C13.9 17.8 12.5 19.2 12 22z" />
    </svg>
  )
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">{icon}</div>
      <div>
        <div className="text-lg font-semibold text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}

function FeatureCard({
  emoji,
  title,
  desc,
}: {
  emoji: string
  title: string
  desc: string
}) {
  return (
    <Card className="rounded-2xl border border-border p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <div aria-hidden="true" className="text-xl">
          {emoji}
        </div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </Card>
  )
}

interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  badges: {
    label: string;
    icon: string;
  }[];
}

export function Hero() {


    const [data, setData] = useState<HeroData | null>(null);
  
      useEffect(() => {
        const fetchData = async () => {
          const res = await fetch("/api/hero", { cache: "no-store" })
          const data = await res.json();
          setData(data);
        };
        fetchData();
      }, []);

      if (!data) return <Loader />;


  return (
    <section className="relative overflow-hidden px-6 py-12 md:py-16">

      <div className="cosmic-gradient pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            <Badge variant="secondary" className="border border-border">
              Certified Vedic Astrologer
            </Badge>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground md:text-5xl">
           {data.title}
          </h1>

          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {data.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" className="shadow cursor-pointer">
              <Calendar className="mr-2 h-4 w-4" />
              {data.ctaText}
            </Button>
            <Button size="lg" variant="outline" className="gap-2 cursor-pointer bg-transparent">
              <Phone className="h-4 w-4" />
              {data.ctaLink}
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md sm:max-w-none sm:grid-cols-3">
            <Stat icon={<Star className="h-5 w-5" />} value={data.badges[0].label} label=""/>
            <Stat icon={<ThumbsUp className="h-5 w-5" />} value={data.badges[1].label}  label=""/>
            <Stat icon={<ShieldCheck className="h-5 w-5" />} value={data.badges[2].label} label=""/>
          </div>
        </div>

        
        <div className="relative mx-auto aspect-square w-full max-w-[420px]">
          <FourPointStar className="absolute left-2 top-2 h-6 w-6 text-accent" />
          <Sparkles className="absolute right-4 top-6 h-5 w-5 text-primary" />
          <FourPointStar className="absolute bottom-10 right-8 h-10 w-10 text-accent" />

          <div className="absolute inset-0 rounded-full border border-border" />
          <div className="absolute inset-3 rounded-full border border-border/70" />

          <div className="relative z-10 h-full w-full overflow-hidden rounded-full bg-muted/40">
            <Image
              alt="Astrologer portrait"
              src={data.imageUrl}
              fill
              className="object-cover"
              priority
            />
          </div>

          <button
            className="absolute bottom-6 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow ring-1 ring-border"
            aria-label="Open booking"
          >
            <Sparkles className="h-5 w-5" />
          </button>
        </div>
      </div>

      
      <div className="mx-auto mt-10 grid max-w-6xl gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <FeatureCard
          emoji="🪐"
          title="Birth Chart Analysis"
          desc="Complete personality analysis and life path guidance through your cosmic blueprint."
        />
        <FeatureCard
          emoji="💎"
          title="Gemstone Therapy"
          desc="Personalized gemstone recommendations to enhance positive energies and well‑being."
        />
        <FeatureCard
          emoji="🏛️"
          title="Vastu Consultation"
          desc="Harmonize your spaces with ancient principles for prosperity and peace."
        />
      </div>
    </section>
  )
}
