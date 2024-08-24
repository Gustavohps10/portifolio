import { ReactNode } from 'react'

interface SidebarProps {
  children: ReactNode
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <div className="fixed z-50 hidden h-screen w-[240px] border p-4 md:block">
      <div>{children}</div>
    </div>
  )
}
