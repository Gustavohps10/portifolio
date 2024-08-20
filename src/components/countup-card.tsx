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
    <Card className="w-[400px] border-zinc-400">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <span className="text-3xl font-bold">
            +<CountUp start={startNumber} end={endNumber} duration={duration} />
          </span>
          <div>{children}</div>
        </div>
      </CardContent>
    </Card>
  )
}
