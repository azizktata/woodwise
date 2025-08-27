import React from 'react'
import { Button } from './ui/button'
import { cn } from './craft'

export default function CustomButton({ label, className }: { label: string, className?: string }) {
  return (
    <Button className={cn("bg-gradient text-white font-bold px-12 py-6 text-sm hover:opacity-80 rounded-xl", className)}>
      {label}
    </Button>
  )
}
