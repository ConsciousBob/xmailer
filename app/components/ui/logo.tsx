import { cn } from '~/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Logo({ variant = 'dark', size = 'md', className }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  }

  const colorClasses = {
    light: 'text-white',
    dark: 'text-gray-900'
  }

  return (
    <div className={cn('flex items-center font-bold', sizeClasses[size], colorClasses[variant], className)}>
      <div className="flex items-center">
        <div className="relative mr-2">
          {/* Mail icon using CSS */}
          <div className={cn(
            "w-8 h-6 border-2 rounded-sm relative",
            variant === 'light' ? 'border-white' : 'border-blue-600'
          )}>
            {/* Envelope flap */}
            <div className={cn(
              "absolute inset-x-0 top-0 h-0 border-l-4 border-r-4 border-t-3",
              variant === 'light' 
                ? 'border-l-transparent border-r-transparent border-t-white' 
                : 'border-l-transparent border-r-transparent border-t-blue-600'
            )} style={{ 
              left: '50%', 
              transform: 'translateX(-50%)',
              borderTopWidth: '12px',
              borderLeftWidth: '16px',
              borderRightWidth: '16px'
            }} />
          </div>
        </div>
        <span className="tracking-tight">
          <span className={variant === 'light' ? 'text-white' : 'text-blue-600'}>x</span>
          <span className={variant === 'light' ? 'text-white' : 'text-gray-900'}>Mailer</span>
        </span>
      </div>
    </div>
  )
}
