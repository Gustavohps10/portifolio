'use client'

import { motion, type MotionProps as FramerMotionProps } from 'framer-motion'

interface MotionProps extends FramerMotionProps {
  as?: keyof typeof motion
  children: React.ReactNode
  className?: string
}

export function Motion({ as, children, ...props }: MotionProps) {
  const Component = as ? motion[as] : motion.div

  return <Component {...props}>{children}</Component>
}
