import React from 'react'
import { Button } from './ui/button'
import { cn } from './craft'
import Link from 'next/link'

export default function CustomButton({ label, className, inverted, asChild, href }: { label: string, className?: string, inverted?: boolean, asChild?: boolean, href: string }) {
  return (
    <Button asChild={asChild} className={cn("bg-gradient text-white font-bold px-8 py-6 md:px-11 md:py-7 text-sm hover:opacity-80 rounded-xl", { "bg-white hover:bg-gray-100 border border-woodPrimary rounded-full": inverted }, className)}>
      <Link href={href} className={cn("text-white", { "bg-gradient bg-clip-text text-transparent": inverted })}>
       
        {label}
    
      </Link>
    </Button>
  )
}
