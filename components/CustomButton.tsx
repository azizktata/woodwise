import React from 'react'
import { Button } from './ui/button'
import { cn } from './craft'
import { Link } from '@/i18n/routing'

export default function CustomButton({ label, className, inverted, asChild, href, locale }: { label: string, className?: string, inverted?: boolean, asChild?: boolean, href: string, locale: string }) {
  return (
    <Button asChild={asChild} className={cn("bg-gradient text-white font-bold px-7 py-6 md:px-11 md:py-7 text-sm hover:opacity-80 rounded-xl", { "text-woodPrimary hover:bg-gray-100 border border-woodPrimary rounded-full": inverted }, className)}>
      <Link href={href} className={cn("text-white", { "text-woodPrimary": inverted })} locale={locale}>
       
        {label}
    
      </Link>
    </Button>
  )
}
