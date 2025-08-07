import { Link, useLocation } from '@remix-run/react'
import { 
  Home, 
  Users, 
  Mail, 
  BarChart3, 
  Settings,
  List,
  Send,
  Server
} from 'lucide-react'
import { cn } from '~/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Subscribers', href: '/subscribers', icon: Users },
  { name: 'Lists', href: '/lists', icon: List },
  { name: 'Campaigns', href: '/campaigns', icon: Send },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
]

const settingsNavigation = [
  { name: 'General', href: '/settings', icon: Settings },
  { name: 'SMTP Config', href: '/settings/smtp', icon: Server },
]

export function Sidebar() {
  const location = useLocation()
  const isSettingsPage = location.pathname.startsWith('/settings')

  const currentNavigation = isSettingsPage ? settingsNavigation : navigation

  return (
    <div className="w-64 bg-gray-800 flex flex-col">
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <Mail className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">xMailer</span>
          </div>
          <nav className="mt-8 flex-1 px-2 space-y-1">
            {currentNavigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={cn(
                      isActive ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}
