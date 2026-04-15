"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Hakkımızda", href: "#about" },
  { name: "Hizmetlerimiz", href: "#services" },
  { name: "Ekibimiz", href: "#team" },
  { name: "Makalelerimiz", href: "#insights" },
  { name: "İletişim", href: "#contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
        <div className="flex lg:flex-1">
        <Link
  href="/"
  className="flex items-center"
  onClick={(e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }}
>
  <Image
    src="/HCC_LOGO-removebg-preview.png"
    alt="HCC Avukatlık Bürosu"
    width={200}
    height={60}
    className="h-20 w-auto object-contain transition duration-300 hover:scale-105 drop-shadow-[0_0_8px_rgba(200,169,106,0.3)]"
    priority
  />
</Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Ana menüyü aç</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            variant="outline"
            className="border-gold text-foreground hover:bg-gold hover:text-primary-foreground transition-all"
          >
            <Link href="#contact">İletişime Geçin</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-foreground/20"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm border-l border-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
                  HCC <span className="text-gold">Avukatlık Bürosu</span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Menüyü kapat</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block px-3 py-2 text-base font-medium text-foreground hover:bg-muted transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="py-6">
                  <Button
                    asChild
                    className="w-full bg-gold text-primary-foreground hover:bg-gold/90"
                  >
                    <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                      İletişime Geçin
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}