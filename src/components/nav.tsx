'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home, User, Mail, Menu, X } from 'lucide-react'
import Images from '@/image/samuel-effiong.JPG'

export function Nav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4">
      <div className="container mx-auto flex items-center justify-between md:justify-center px-6">
        {/* Logo and Nav Links (centered for desktop) */}
        <div className="flex items-center space-x-8 md:mx-auto">
          <Link href="/" className="mr-6 flex items-center space-x-2 text-xl">
            <Image src={Images} alt="Logo" width={25} height={20} className="rounded-full" />
            <span className="font-bold sm:inline-block">Samuel Effiong</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/" ? "text-foreground" : "text-foreground/60"
              )}
            >
              <span className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Home
              </span>
            </Link>
            <Link
              href="/about"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/about" ? "text-foreground" : "text-foreground/60"
              )}
            >
              <span className="flex items-center gap-2">
                <User className="h-5 w-5" />
                About
              </span>
            </Link>
            <Link
              href="/contact"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/contact" ? "text-foreground" : "text-foreground/60"
              )}
            >
              <span className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact
              </span>
            </Link>
          </nav>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden flex items-center ml-6" onClick={toggleMenu}>
          {isOpen ? (
            <X className="h-7 w-7 text-foreground" />
          ) : (
            <Menu className="h-7 w-7 text-foreground" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-background/95 backdrop-blur`}>
        <nav className="flex flex-col items-center py-6 space-y-6 text-lg font-medium">
          <Link
            href="/"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/" ? "text-foreground" : "text-foreground/60"
            )}
          >
            <span className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Home
            </span>
          </Link>
          <Link
            href="/about"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/about" ? "text-foreground" : "text-foreground/60"
            )}
          >
            <span className="flex items-center gap-2">
              <User className="h-5 w-5" />
              About
            </span>
          </Link>
          <Link
            href="/contact"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/contact" ? "text-foreground" : "text-foreground/60"
            )}
          >
            <span className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact
            </span>
          </Link>
        </nav>
      </div>
    </nav>
  )
}
