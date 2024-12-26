import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface NotificationProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

export function Notification({ message, type, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  if (!isVisible) return null

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-md shadow-lg ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white max-w-md z-50 transition-all duration-300 ease-in-out`}>
      <div className="flex justify-between items-center">
        <p>{message}</p>
        <button onClick={() => setIsVisible(false)} className="ml-4 focus:outline-none">
          <X size={20} />
        </button>
      </div>
    </div>
  )
}

