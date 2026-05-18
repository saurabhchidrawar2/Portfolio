"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/lib/site-data"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <motion.div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full"
              >
                <div className="h-full p-6 rounded-xl glass hover:glow-blue transition-all duration-300 flex flex-col gap-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Building2 className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)]">
                        {exp.company}
                      </h3>
                    </div>

                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {exp.role}
                    </h4>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
