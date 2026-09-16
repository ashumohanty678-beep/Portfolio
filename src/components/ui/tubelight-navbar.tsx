"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name || "")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Automated Scroll-Spy to highlight current section as user scrolls
  useEffect(() => {
    const sectionElements = items
      .filter((item) => item.url.startsWith("#"))
      .map((item) => ({
        name: item.name,
        element: document.querySelector(item.url),
      }))
      .filter((entry): entry is { name: string; element: Element } => entry.element !== null)

    if (sectionElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible sections sorted by intersection ratio
        const visibleEntries = entries.filter((e) => e.isIntersecting)
        if (visibleEntries.length > 0) {
          // Sort by visibility ratio descending
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          const matching = sectionElements.find((s) => s.element === visibleEntries[0].target)
          if (matching) {
            setActiveTab(matching.name)
          }
        }
      },
      {
        root: null,
        rootMargin: "-15% 0px -35% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    sectionElements.forEach(({ element }) => observer.observe(element))

    return () => {
      sectionElements.forEach(({ element }) => observer.unobserve(element))
      observer.disconnect()
    }
  }, [items])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    setActiveTab(item.name)

    if (item.url.startsWith("#")) {
      e.preventDefault()
      const target = document.querySelector(item.url)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-4 sm:mb-6 sm:pt-6 select-none",
        className,
      )}
    >
      <div className="flex items-center gap-1 sm:gap-2 bg-white/85 dark:bg-black/75 border border-neutral-200 dark:border-white/15 backdrop-blur-xl py-1 px-1.5 rounded-full shadow-2xl transition-all duration-300">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => handleNavClick(e, item)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-medium sm:font-semibold px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors duration-150",
                "text-neutral-600 dark:text-foreground/80 hover:text-neutral-900 dark:hover:text-primary",
                isActive && "bg-neutral-100 dark:bg-muted text-neutral-900 dark:text-primary",
              )}
            >
              <span className="hidden lg:inline">{item.name}</span>
              <span className="lg:hidden flex items-center justify-center p-0.5">
                <Icon size={16} strokeWidth={2.2} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
