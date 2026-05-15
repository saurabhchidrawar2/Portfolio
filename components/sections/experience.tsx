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

          <motion.div className="max-w-4xl mx-auto relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-secondary md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary glow-blue ${
                    index % 2 === 0
                      ? "left-0 md:left-auto md:right-0 md:translate-x-1/2 -translate-x-1/2"
                      : "left-0 md:-translate-x-1/2"
                  }`}
                  style={{ marginLeft: index % 2 === 0 ? "" : "calc(50% - 8px)" }}
                />

                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  <div className="p-6 rounded-xl glass hover:glow-blue transition-all duration-300">
                    <motion.div
                      className={`flex flex-wrap items-center gap-3 mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <Building2 className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)]">
                        {exp.company}
                      </h3>
                    </motion.div>

                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {exp.role}
                    </h4>

                    <div
                      className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p
                      className={`text-muted-foreground mb-4 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.description}
                    </p>

                    <ul
                      className={`space-y-2 mb-4 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                          style={{
                            flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                          }}
                        >
                          <span className="text-primary mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
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
      </motion.div>
    </section>
  )
}
