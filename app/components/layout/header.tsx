import { Form } from '@remix-run/react'
import { Button } from '~/components/ui/button'
import { LogOut, User } from 'lucide-react'
import { Logo } from '~/components/ui/logo'

interface HeaderProps {
  user?: {
    email?: string
    user_metadata?: {
      full_name?: string
    }
  }
  showLogo?: boolean
}

export function Header({ user, showLogo = false }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showLogo && <Logo variant="dark" size="md" />}
          <h1 className="text-2xl font-semibold text-gray-900">
            Email Autoresponder
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {user && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <User className="h-4 w-4" />
              <span>
                {user.user_metadata?.full_name || user.email}
              </span>
            </div>
          )}
          
          <Form method="post" action="/logout">
            <Button variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </Form>
        </div>
      </div>
    </header>
  )
}
