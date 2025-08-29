"use client"

import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
        >
          <Sparkles className="h-8 w-8 text-primary" />
        </motion.div>

        <motion.p
          className="text-sm font-medium text-muted-foreground"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  )
}
