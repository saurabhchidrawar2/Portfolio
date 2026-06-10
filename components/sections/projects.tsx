"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
<<<<<<< HEAD
import { ExternalLink, Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { projects } from "@/lib/site-data"
=======
import { Github, ExternalLink, Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { projects, siteConfig } from "@/lib/site-data"
>>>>>>> 2f6972b38133e5c19a723cca1abaf803c66db8b7

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Enterprise projects from financial analytics, cloud migration, and
              digital banking platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl glass hover:glow-blue transition-all duration-500"
              >
                {project.featured && (
                  <motion.div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-xs font-semibold rounded-full text-white">
                    Featured
                  </motion.div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
<<<<<<< HEAD
                  {"live" in project && project.live && (
                    <Link
                      href={project.live}
=======
                  <div className="flex items-center gap-2">
                    <Link
                      href={project.github}
>>>>>>> 2f6972b38133e5c19a723cca1abaf803c66db8b7
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
<<<<<<< HEAD
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
=======
                      <Github className="h-5 w-5" />
                    </Link>
                    {"live" in project && project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
>>>>>>> 2f6972b38133e5c19a723cca1abaf803c66db8b7
                </div>

                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Architecture: </span>
                    {project.architecture}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
=======

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-muted gap-2"
              asChild
            >
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
          </motion.div>
>>>>>>> 2f6972b38133e5c19a723cca1abaf803c66db8b7
        </motion.div>
      </div>
    </section>
  )
}
