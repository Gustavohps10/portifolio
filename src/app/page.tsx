import { Button } from '@/components/ui/button'
import { DashboardIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import homeImage from '@/assets/images/home-img.svg'
import skillsImage from '@/assets/images/skills.svg'
import aboutImage from '@/assets/images/aboutme.svg'
import { CountUpCard } from '@/components/countup-card'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default async function Home() {
  return (
    <>
      <section
        id="home"
        className="bg-gradient-to-r from-primary from-60% via-white via-[percentage:20%_90%] to-white to-90% dark:via-zinc-950 dark:to-zinc-950 lg:h-[95vh]"
      >
        <div className="mx-auto flex h-full max-w-[90rem] flex-wrap items-center">
          <aside className="flex h-full items-center bg-primary px-12 py-28 sm:w-full lg:w-3/5">
            <div className="sm:mx-auto lg:m-0">
              <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-white lg:text-7xl">
                Oi, eu sou
                <br />
                <span className="text-[#2e2b46]">Gustavo Henrique</span>
              </h1>
              <h2 className="mt-4 scroll-m-20 pb-2 text-4xl font-semibold tracking-tight text-white first:mt-0">
                Desenvolvedor Full Stack
              </h2>
              <h3 className="my-6 scroll-m-20 text-2xl tracking-tight text-white">
                Meus principais hobbies são: jogar video game 🎮
              </h3>
              <Button variant="outline" className="mt-10">
                Meus Projetos <DashboardIcon className="ml-2 h-4" />
              </Button>
            </div>
          </aside>
          <div className="flex h-full items-center justify-center bg-white p-12 dark:bg-zinc-950 sm:w-full lg:w-2/5">
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem ipsum necessitatibus voluptatibus omnis vel autem,
              voluptates nostrum unde, vero quaerat inventore modi molestiae
              dicta? Quod sit praesentium numquam sequi alias.
            </p>
            <p className="max-w-[560px] leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem ipsum necessitatibus voluptatibus omnis vel autem,
              voluptates nostrum unde, vero quaerat inventore modi molestiae
              dicta? Quod sit praesentium numquam sequi alias.
            </p>
            <Button variant="secondary" className="mt-8 max-w-max">
              Meu Linkedin <FaLinkedin className="ml-2 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#645de2] text-slate-100">
        <div className="mx-auto h-full max-w-[90rem] px-12 py-28">
          <div className="flex flex-wrap items-center justify-center gap-16">
            <div className="flex flex-col justify-center lg:flex-1">
              <h2 className='first:mt-0" max-w-fit scroll-m-20 border-b border-slate-200 pb-2 text-5xl font-bold tracking-tight'>
                Habilidades
              </h2>
              <p className="max-w-[560px] leading-7 [&:not(:first-child)]:mt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem ipsum necessitatibus voluptatibus omnis vel
                autem, voluptates nostrum unde, vero quaerat inventore modi
                molestiae dicta? Quod sit praesentium numquam sequi alias.
              </p>
              <p className="max-w-[560px] leading-7 [&:not(:first-child)]:mt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem ipsum necessitatibus voluptatibus omnis vel
                autem, voluptates nostrum unde, vero quaerat inventore modi
                molestiae dicta? Quod sit praesentium numquam sequi alias.
              </p>
              <Button variant="secondary" className="mt-8 max-w-max">
                Meu Github <FaGithub className="ml-2 h-4" />
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

        <form className="mx-auto mt-8 max-w-[600px]">
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
            <Button>Enviar</Button>
          </div>
        </form>
      </section>
    </>
  )
}
