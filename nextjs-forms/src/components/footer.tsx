'use client'

import { useEffect, useState } from 'react'

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear())
    }, 1000 * 60 * 60) // Check every hour

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-4 mt-12">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; {currentYear} Samuel Effiong. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

