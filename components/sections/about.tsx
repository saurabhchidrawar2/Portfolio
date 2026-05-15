"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Server, Cloud, Zap } from "lucide-react"
import { aboutHighlights, siteConfig } from "@/lib/site-data"

const highlightIcons = [Server, Cloud, Code2, Zap]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {siteConfig.about.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-lg text-muted-foreground mb-6 leading-relaxed last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
              <p className="text-sm text-muted-foreground mt-6">
                <span className="font-semibold text-foreground">Education: </span>
                {siteConfig.education.degree}, {siteConfig.education.school} (
                {siteConfig.education.period})
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {aboutHighlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? Code2
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="p-6 rounded-xl glass hover:glow-blue transition-all duration-300 group"
                  >
                    <Icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
