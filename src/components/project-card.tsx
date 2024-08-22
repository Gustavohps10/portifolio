import { RiNextjsFill } from 'react-icons/ri'
import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from './ui/card'
import { ProjectProps } from '@/app/projects/utils'
import Image from 'next/image'

export function ProjectCard({ id, name, image, description }: ProjectProps) {
  return (
    <Card
      key={id}
      className="group mx-auto max-w-[480px] cursor-pointer overflow-hidden transition-all duration-150 ease-linear hover:-translate-y-3"
    >
      <CardContent className="p-0">
        <Image
          className="max-h-44 w-full object-cover brightness-90 group-hover:brightness-100"
          src={image}
          width={500}
          height={300}
          alt="Imagem do projeto"
        />
        <div className="p-4">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex gap-1 px-4">
        <Badge variant="outline">
          <RiNextjsFill className="h-4 w-4" />
          <span className="ml-1">Next.js</span>
        </Badge>
        <Badge variant="outline">
          <RiNextjsFill className="h-4 w-4" />
          <span className="ml-1">Next.js</span>
        </Badge>
      </CardFooter>
    </Card>
  )
}
