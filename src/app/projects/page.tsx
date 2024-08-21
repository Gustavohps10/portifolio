import { ProjectCard } from '@/components/project-card'
import { getProjects } from './utils'

import { Button } from '@/components/ui/button'
import {
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

export const revalidate = 60 * 60 // 1 hour

export default async function Projects() {
  const projects = await getProjects()

  return (
    <>
      <section className="mx-auto h-full max-w-[90rem] px-12 py-40">
        <h2 className="mx-auto max-w-fit scroll-m-20 border-b pb-2 text-5xl font-bold tracking-tight first:mt-0">
          Projetos
        </h2>
        <h3 className="mx-auto mt-2 max-w-fit scroll-m-20 pb-2 text-center text-3xl font-light tracking-tight text-slate-500">
          Uma pequena demonstração do que já desenvolvi ao longo da minha
          jornada.
        </h3>

        <div className="mt-8 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <ProjectCard {...project} />
              </DialogTrigger>
              <DialogContent className="max-w-lg md:max-w-2xl lg:max-w-4xl">
                <Carousel
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                  className="mt-4 w-full"
                >
                  <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Image
                            className="max-h-[30rem] object-cover"
                            src={project.image}
                            width={1200}
                            height={720}
                            alt="Imagem do projeto"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="translate-x-[200%] border-primary" />
                  <CarouselNext className="-translate-x-[200%] border-primary" />
                </Carousel>
                <DialogTitle>{project.name}</DialogTitle>
                <DialogDescription>{project.longDescription}</DialogDescription>

                <DialogFooter className="sm:justify-start">
                  <Button>Código fonte</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </>
  )
}
