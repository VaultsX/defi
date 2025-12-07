import { Layers, Brain } from 'lucide-react'
import Link from 'next/link'

interface LogoProps {
  variant?: 'full' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Logo({ variant = 'full', size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }

  const iconSize = sizeClasses[size]
  const textSize = textSizes[size]

  if (variant === 'icon') {
    return (
      <Link
        href="/"
        className={`inline-flex items-center justify-center ${iconSize} text-red-600 dark:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2 rounded ${className}`}
        aria-label="VaultsIQ home"
      >
        <Layers className={iconSize} strokeWidth={2.5} />
      </Link>
    )
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 ${className} focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-500 focus:ring-offset-2 rounded`}
      aria-label="VaultsIQ home"
    >
      <div className="relative">
        <Layers className={`${iconSize} text-red-600 dark:text-red-500`} strokeWidth={2.5} />
        <Brain
          className={`${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'} absolute -top-1 -right-1 text-red-700 dark:text-red-400`}
          strokeWidth={2.5}
          fill="currentColor"
        />
      </div>
      <span className={`${textSize} font-bold text-red-600 dark:text-red-500`}>
        VaultsIQ
      </span>
    </Link>
  )
}

