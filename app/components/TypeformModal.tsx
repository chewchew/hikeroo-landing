'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    tf: any
  }
}

export default function TypeformModal() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script')
    script.src = '//embed.typeform.com/next/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div 
      data-tf-live="01JT6P42A8066MQ5DJ0K0D7Q19"
      className="fixed inset-0 z-50 w-full h-full bg-white"
    />
  )
} 