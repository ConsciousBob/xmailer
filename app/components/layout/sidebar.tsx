import { Link, useLocation } from '@remix-run/react'
import { 
  Mail, 
  Users, 
  Settings, 
  BarChart3, 
  Send,
  Database,
  Zap,
  List
} from 'lucide-react'
import { cn } from '~/lib/utils'
import { Logo } from '~/components/ui/logo'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Campaigns', href: '/campaigns', icon: Mail },
  { name: 'Recipients', href: '/recipients', icon: Users },
  { name: 'Lists', href: '/lists', icon: List },
  { name: 'SMTP Config', href: '/smtp', icon: Send },
  { name: 'Email APIs', href: '/email-apis', icon: Zap },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <div className="flex h-full w-64 flex-col bg-gray-900">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center">
          <Logo variant="light" size="lg" />
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + '/')
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
