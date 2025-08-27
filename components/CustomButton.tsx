import React from 'react'
import { Button } from './ui/button'
import { cn } from './craft'

export default function CustomButton({ label, className, inverted, asChild }: { label: string, className?: string, inverted?: boolean, asChild?: boolean  }) {
  return (
    <Button asChild={asChild} className={cn("bg-gradient text-white font-bold px-11 py-7 text-sm hover:opacity-80 rounded-xl", { "bg-white hover:bg-gray-100 border border-woodPrimary rounded-full": inverted }, className)}>
      <span className={cn("text-white", { "bg-gradient bg-clip-text text-transparent": inverted })}>
        {label}
      </span>
    </Button>
  )
}
