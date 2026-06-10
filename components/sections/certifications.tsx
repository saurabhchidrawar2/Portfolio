"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { certifications } from "@/lib/site-data"

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Cloud and streaming certifications in progress
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl glass hover:glow-purple transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </div>
                </div>

                <h3 className="font-bold font-[family-name:var(--font-space-grotesk)] mb-2 group-hover:text-secondary transition-colors text-sm leading-tight">
                  {cert.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary border-secondary/20 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
