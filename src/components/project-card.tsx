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
import { Icons } from './icons'
import React from 'react'

export function ProjectCard({
  id,
  name,
  image,
  description,
  tags,
}: ProjectProps) {
  return (
    <Card
      key={id}
      className="group mx-auto flex max-w-[480px] cursor-pointer flex-col justify-between overflow-hidden transition-all duration-150 ease-linear hover:-translate-y-3"
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
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => {
            tag = tag.replace(/^./, tag[0].toUpperCase())

            return (
              <Badge key={tag} variant="outline">
                {React.createElement(Icons[tag as keyof typeof Icons], {
                  size: 14,
                })}
                <span className="ml-1">{tag}</span>
              </Badge>
            )
          })}
        </div>
      </CardFooter>
    </Card>
  )
}
