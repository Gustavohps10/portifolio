import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import Image from 'next/image'
import fakeProjectImage from '@/assets/images/fake.png'
import { Badge } from '@/components/ui/badge'
import { RiNextjsFill } from 'react-icons/ri'

export default async function Projects() {
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
          {Array.from({ length: 12 }).map((project, index) => (
            <Card
              key={index}
              className="group mx-auto max-w-[480px] cursor-pointer overflow-hidden transition-all duration-150 ease-linear hover:-translate-y-3"
            >
              <CardContent className="p-0">
                <Image
                  className="max-h-44 w-full object-cover brightness-90 group-hover:brightness-100"
                  src={fakeProjectImage}
                  width={500}
                  alt="Imagem do projeto"
                />
                <div className="p-4">
                  <CardTitle>Portifólio</CardTitle>
                  <CardDescription>
                    Feito com o propósito de me apresentar e mostrar alguns dos
                    projetos que ja desenvolvi.
                  </CardDescription>
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
          ))}
        </div>
      </section>
    </>
  )
}
