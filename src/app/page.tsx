import { Button } from '@/components/ui/button'

import { DashboardIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import homeImage from '@/assets/images/home-img.svg'
import skillsImage from '@/assets/images/skills.svg'
import aboutImage from '@/assets/images/aboutme.svg'
import { CountUpCard } from '@/components/countup-card'
import { FaGithub, FaLinkedin, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa'
import { TbApi, TbBrandNodejs, TbBrandPhp, TbBrandReact } from 'react-icons/tb'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { RiNextjsLine } from 'react-icons/ri'

export default async function Home() {
  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-r from-primary from-60% via-white via-[percentage:20%_90%] to-white to-90% dark:via-gray-950 dark:to-gray-950 lg:h-[95vh]"
      >
        <div className="mx-auto flex h-full max-w-[90rem] flex-wrap items-center">
          <aside className="flex h-full w-full items-center bg-primary px-12 py-28 lg:w-3/5">
            <div className="sm:mx-auto lg:m-0">
              <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-white lg:text-6xl">
                Oi, eu sou
              </h1>
              <h2 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-[#2e2b46] lg:text-7xl">
                Gustavo Henrique
              </h2>
              <h2 className="mt-2 scroll-m-20 pb-2 text-4xl font-normal tracking-tight text-gray-100 first:mt-0">
                Desenvolvedor Full Stack
              </h2>

              <div className="mb-12 mt-4 flex items-center gap-4">
                <Badge
                  variant="outline"
                  className="border-gray-50 bg-transparent text-gray-50 shadow-md"
                >
                  <TbBrandNodejs className="mr-2 h-5 w-5" /> Node.js
                </Badge>
                <Badge
                  variant="outline"
                  className="border-gray-50 bg-transparent text-gray-50 shadow-md"
                >
                  <TbBrandPhp className="mr-2 h-5 w-5" /> PHP
                </Badge>
                <Badge
                  variant="outline"
                  className="border-gray-50 bg-transparent text-gray-50 shadow-md"
                >
                  <TbBrandReact className="mr-2 h-5 w-5" /> React
                </Badge>
                <Badge
                  variant="outline"
                  className="border-gray-50 bg-transparent text-gray-50 shadow-md"
                >
                  <RiNextjsLine className="mr-2 h-5 w-5" /> Next.js
                </Badge>
                <Badge
                  variant="outline"
                  className="border-gray-50 bg-transparent text-gray-50 shadow-md"
                >
                  <TbApi className="mr-2 h-5 w-5" /> REST
                </Badge>
              </div>

              <Button
                asChild
                className="duration-50 bg-gray-100 text-[#6b67b0] shadow-md transition-all ease-in hover:bg-gray-100 hover:text-[#2e2b46]"
              >
                <Link href="/projects" className="">
                  Meus Projetos <DashboardIcon className="ml-2 h-4" />
                </Link>
              </Button>
            </div>
          </aside>
          <div className="flex h-full items-center justify-center bg-white p-12 dark:bg-gray-950 sm:w-full lg:w-2/5">
            <Image
              src={homeImage}
              width={500}
              height={500}
              alt=""
              className="max-h-64 lg:max-h-80"
            />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto h-full max-w-[90rem] px-12 py-28">
        <div className="flex flex-col-reverse flex-wrap items-center justify-center gap-16 lg:flex-row">
          <div className="flex items-center justify-center lg:flex-1">
            <Image src={aboutImage} width={500} height={500} alt="Sobre mim" />
          </div>
          <div className="flex flex-col justify-center lg:w-auto lg:flex-1">
            <h2 className='first:mt-0" max-w-fit scroll-m-20 border-b pb-2 text-5xl font-bold tracking-tight'>
              Sobre mim
            </h2>
            <p className="max-w-[560px] leading-7 [&:not(:first-child)]:mt-6">
              Sou um entusiasta de tecnologia com sólido conhecimento em
              desenvolvimento de software. Minha paixão pelo mundo digital me
              motiva a enfrentar novos desafios constantemente, por isso,
              solucionar problemas através das linhas de código é meu principal
              objetivo.
            </p>
            <p className="max-w-[560px] leading-7 [&:not(:first-child)]:mt-6">
              Atualmente, estou focado no desenvolvimento de soluções tanto
              Front-end quanto Back-end, garantindo uma experiência de usuário
              funcional, intuitiva e performática.
            </p>

            <h3 className="mt-6 font-semibold">Hobbies:</h3>
            <ul className="max-w-[560px] list-disc leading-7 text-slate-400 dark:text-slate-300">
              <li>⚽ Esportes, principalmente futebol</li>
              <li>🎮 Fanático pelo mundo dos games</li>
              <li>🎸 Ouvir uma boa música</li>
            </ul>
            <Button variant="secondary" className="mt-8" asChild>
              <Link
                href="https://www.linkedin.com/in/guhenriquesantos/"
                target="_blank"
                className="max-w-max"
              >
                Meu Linkedin <FaLinkedin className="ml-2 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#0d102a] text-slate-100">
        <div className="mx-auto h-full max-w-[90rem] px-12 py-28">
          <div className="flex flex-wrap items-center justify-center gap-16">
            <div className="flex flex-col justify-center lg:flex-1">
              <h2 className='first:mt-0" max-w-fit scroll-m-20 border-b border-slate-200 pb-2 text-5xl font-bold tracking-tight'>
                Habilidades
              </h2>
              <p className="max-w-[560px] leading-7 text-slate-200 [&:not(:first-child)]:mt-6">
                Minha jornada no desenvolvimento web começou com a base sólida
                de <span className="text-[#8b86ee]">HTML</span>,{' '}
                <span className="text-[#8b86ee]">CSS</span> e{' '}
                <span className="text-[#8b86ee]">Vanilla JavaScript</span>. Com
                o tempo, mergulhei no{' '}
                <span className="text-[#8b86ee]">PHP</span>, aprofundando meu
                conhecimento em desenvolvimento backend. Atualmente, sou capaz
                de construir aplicações completas utilizando{' '}
                <span className="text-[#8b86ee]">Node.js</span>, aplicando as
                melhores práticas com{' '}
                <span className="text-[#8b86ee]">React.js</span>,{' '}
                <span className="text-[#8b86ee]">React Native</span> e{' '}
                <span className="text-[#8b86ee]">Next.js</span>, além de
                desenvolver e consumir minhas próprias
                <span className="text-[#8b86ee]"> APIs REST</span>.
              </p>

              <h3 className="mt-6 font-semibold">Diferencial:</h3>
              <ul className="max-w-[560px] list-disc leading-7 text-slate-400 dark:text-slate-300">
                <li>✨ Clean Code, SOLID, Design Patterns</li>
                <li>🤳 Layout elegante e responsivo</li>
                <li>
                  🤝 Facilidade em aprender, ensinar e trabalhar em equipe
                </li>
              </ul>

              <Button variant="secondary" className="mt-8" asChild>
                <Link
                  href="https://github.com/gustavohps10"
                  target="_blank"
                  className="max-w-max"
                >
                  Meu Github <FaGithub className="ml-2 h-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center lg:flex-1">
              <Image
                src={skillsImage}
                width={500}
                height={500}
                alt="Habilidades"
              />
            </div>
          </div>

          <div className="mx-auto mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <CountUpCard
              title="Experiência"
              duration={2}
              endNumber={new Date().getFullYear() - 2020}
            >
              anos imerso no mundo da tecnologia
            </CountUpCard>

            <CountUpCard title="Contribuições" duration={2} endNumber={1000}>
              commits no Github
            </CountUpCard>

            <CountUpCard title="Repertório" duration={2} endNumber={30}>
              repositórios no Github
            </CountUpCard>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto h-full max-w-[90rem] px-12 py-40"
      >
        <h2 className='first:mt-0" mx-auto max-w-fit scroll-m-20 border-b pb-2 text-5xl font-bold tracking-tight'>
          Entre em contato
        </h2>

        <form
          className="mx-auto mt-8 max-w-[600px]"
          action="https://formsubmit.co/gustavoh.santos735@gmail.com"
          method="POST"
        >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Digite seu nome" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Digite seu email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" placeholder="Digite uma mensagem" />
            </div>
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </section>
    </>
  )
}
