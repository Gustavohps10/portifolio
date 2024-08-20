import { Button } from '@/components/ui/button'
import { DashboardIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import homeImage from '@/assets/images/home-img.svg'

export default async function Page() {
  return (
    <>
      <section className="backgroun h-[95vh] bg-gradient-to-r from-primary from-60% via-white via-[percentage:20%_90%] to-white to-90% dark:via-zinc-950 dark:to-zinc-950">
        <div className="mx-auto flex h-full max-w-[90rem] items-center">
          <aside className="flex h-full w-3/5 items-center bg-primary">
            <div>
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
          <div className="flex h-full w-2/5 items-center justify-center bg-white dark:bg-zinc-950">
            <Image src={homeImage} width={500} height={500} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
