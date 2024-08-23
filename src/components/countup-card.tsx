'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import CountUp from 'react-countup'

interface CountUpCardProps {
  title: string
  description?: string
  children?: React.ReactNode
  startNumber?: number
  endNumber: number
  duration: number
}

export function CountUpCard({
  children,
  title,
  description,
  startNumber,
  endNumber,
  duration,
}: CountUpCardProps) {
  return (
    <Card className="border-slate-200 bg-transparent text-slate-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <span className="text-3xl font-bold">
            +
            <CountUp
              enableScrollSpy
              scrollSpyOnce
              start={startNumber}
              end={endNumber}
              duration={duration}
            />
          </span>
          <div className="text-slate-300">{children}</div>
        </div>
      </CardContent>
    </Card>
  )
}
