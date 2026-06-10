"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { navLinks, siteConfig } from "@/lib/site-data"

const footerSocial = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link
                href="/"
                className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text inline-block mb-4"
              >
                {siteConfig.brand}
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {siteConfig.title} building scalable microservices, event-driven
                systems, and cloud-native solutions for enterprise applications.
              </p>
            </div>

            <div>
              <h3 className="font-semibold font-[family-name:var(--font-space-grotesk)] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold font-[family-name:var(--font-space-grotesk)] mb-4">
                Connect
              </h3>
              <div className="flex items-center gap-4">
                {footerSocial.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built using
              Next.js & Tailwind
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
