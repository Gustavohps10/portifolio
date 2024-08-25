import { ReactNode } from 'react'

interface SidebarProps {
  children: ReactNode
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <div className="fixed z-50 hidden h-screen w-[240px] border bg-[#fbfbfb] p-4 dark:bg-gray-950 md:block">
      <div>{children}</div>
    </div>
  )
}
