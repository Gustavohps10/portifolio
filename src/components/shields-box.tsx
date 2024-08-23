'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

interface ShieldProps {
  shields: {
    dark: string[]
    light: string[]
  }
}

export function ShieldsBox({ shields }: ShieldProps) {
  const { theme } = useTheme()
  const shieldUrls = theme === 'light' ? shields.light : shields.dark

  return (
    <div className="flex gap-2">
      {shieldUrls.map((shield) => (
        <Image
          key={shield}
          src={shield}
          width={100}
          height={50}
          alt=""
          className="w-auto rounded-md border-2 shadow-md dark:border-gray-700"
        />
      ))}
    </div>
  )
}
