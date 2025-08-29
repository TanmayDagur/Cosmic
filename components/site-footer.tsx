import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-card text-card-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="text-lg font-semibold">Pipepro</div>
          <p className="text-sm text-muted-foreground">
            From problem to solution, we deliver reliable guidance with clarity and care.
          </p>
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full bg-muted text-center pt-1 cursor-pointer" >f</div>
            <div className="h-8 w-8 rounded-full bg-muted text-center pt-1 cursor-pointer" >In</div>
            <div className="h-8 w-8 rounded-full bg-muted text-center pt-1 cursor-pointer" >L</div>
          </div>
        </div>

        <FooterList
          title="Services"
          items={[
            "Drip Detection",
            "Leak Stop Specialists",
            "Pipe Dream Team",
            "Rapid Repair Squad",
            "Clear Flow Plumbers",
          ]}
        />
        <FooterList title="Quick Links" items={["About Us", "Blog", "Testimonials", "FAQs", "Contact Us"]} />
        <FooterList title="Contact Info" items={["+1 (555) 000‑000", "Office Address", "88 Boulevard, New India"]} />
      </div>
      <Separator />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-xs text-muted-foreground">
        <div>© Pipepro 2025 | All Rights Reserved</div>
        <div className="flex gap-6">
          <a href="#">Privacy & Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  )
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((it) => (
          <li key={it} className="transition-colors hover:text-foreground cursor-pointer">
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}
