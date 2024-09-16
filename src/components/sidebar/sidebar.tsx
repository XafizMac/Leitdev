import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Mail, Calendar, PlusSquare, MoreHorizontal, Settings, MoreVertical } from 'lucide-react'

const navItems = [
  { name: 'Посты', href: '/posts', icon: Mail },
  { name: 'Мероприятия', href: '/events', icon: Calendar },
  { name: 'Создать организацию', href: '/create-org', icon: PlusSquare },
  { name: 'Другой', href: '/other', icon: MoreHorizontal },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-screen bg-white border-r w-64">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black"></div>
          <span className="text-xl font-semibold">Leitdev</span>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">Навигация</h2>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href} passHref>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600'}`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="mt-auto p-4 space-y-1">
        <Button variant="ghost" className="w-full justify-start text-gray-600">
          <Settings className="w-5 h-5 mr-3" />
          Настройки
        </Button>
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">H</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium truncate">hafizofficial@gmail.com</p>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}