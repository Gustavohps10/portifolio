import Link from 'next/link'
import { Button } from './ui/button'
import {
  HomeIcon,
  PersonIcon,
  MixIcon,
  DashboardIcon,
} from '@radix-ui/react-icons'
import { CiHashtag } from 'react-icons/ci'
import { RiContactsBook3Line } from 'react-icons/ri'
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaReddit,
  FaSteam,
} from 'react-icons/fa'
import { IoOpenOutline } from 'react-icons/io5'
import { Separator } from './ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function MenuContent() {
  return (
    <>
      <div className="flex items-center gap-3 py-2">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/Gustavohps10.png" />
          <AvatarFallback>Gu</AvatarFallback>
        </Avatar>
        <div>
          <Link href="/" className="block h-3">
            <svg
              className="fill-foreground"
              width="100%"
              height="100%"
              viewBox="0 0 559.524 59.524"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="svgGroup"
                strokeLinecap="round"
                fillRule="evenodd"
                fontSize="9pt"
                stroke="text-foreground"
                strokeWidth="0.25mm"
                fill="text-foreground"
              >
                <path
                  d="M 214.286 59.524 L 166.667 59.524 L 166.667 47.619 L 202.381 47.619 L 202.381 35.714 L 178.571 35.714 L 178.571 23.81 L 166.667 23.81 L 166.667 11.905 L 178.571 11.905 L 178.571 0 L 226.19 0 L 226.19 11.905 L 190.476 11.905 L 190.476 23.81 L 214.286 23.81 L 214.286 35.714 L 226.19 35.714 L 226.19 47.619 L 214.286 47.619 L 214.286 59.524 Z M 47.619 59.524 L 11.905 59.524 L 11.905 47.619 L 0 47.619 L 0 11.905 L 11.905 11.905 L 11.905 0 L 59.524 0 L 59.524 11.905 L 23.81 11.905 L 23.81 47.619 L 35.714 47.619 L 35.714 23.81 L 59.524 23.81 L 59.524 47.619 L 47.619 47.619 L 47.619 59.524 Z M 130.952 59.524 L 95.238 59.524 L 95.238 47.619 L 83.333 47.619 L 83.333 0 L 107.143 0 L 107.143 47.619 L 119.048 47.619 L 119.048 0 L 142.857 0 L 142.857 47.619 L 130.952 47.619 L 130.952 59.524 Z M 452.381 59.524 L 428.571 59.524 L 428.571 47.619 L 416.667 47.619 L 416.667 23.81 L 404.762 23.81 L 404.762 0 L 428.571 0 L 428.571 23.81 L 452.381 23.81 L 452.381 0 L 476.19 0 L 476.19 23.81 L 464.286 23.81 L 464.286 47.619 L 452.381 47.619 L 452.381 59.524 Z M 369.048 0 L 369.048 11.905 L 380.952 11.905 L 380.952 59.524 L 357.143 59.524 L 357.143 35.714 L 345.238 35.714 L 345.238 59.524 L 321.429 59.524 L 321.429 11.905 L 333.333 11.905 L 333.333 0 L 369.048 0 Z M 547.619 59.524 L 511.905 59.524 L 511.905 47.619 L 500 47.619 L 500 11.905 L 511.905 11.905 L 511.905 0 L 547.619 0 L 547.619 11.905 L 559.524 11.905 L 559.524 47.619 L 547.619 47.619 L 547.619 59.524 Z M 285.714 59.524 L 261.905 59.524 L 261.905 11.905 L 250 11.905 L 250 0 L 297.619 0 L 297.619 11.905 L 285.714 11.905 L 285.714 59.524 Z M 523.81 11.905 L 523.81 47.619 L 535.714 47.619 L 535.714 11.905 L 523.81 11.905 Z M 345.238 11.905 L 345.238 23.81 L 357.143 23.81 L 357.143 11.905 L 345.238 11.905 Z"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            </svg>
          </Link>
          <span className="text-sm text-gray-500">Desenvolvedor</span>
        </div>
      </div>

      <Separator className="mb-8" />

      <h2 className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
        Seções
      </h2>
      <div className="flex flex-col gap-0.5">
        <Button
          variant="ghost"
          className="group w-full justify-start gap-2"
          asChild
        >
          <Link href="/#home">
            <HomeIcon className="h-4 w-4 group-hover:text-primary" />
            Home
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="group w-full justify-start gap-2"
          asChild
        >
          <Link href="/#about">
            <PersonIcon className="h-4 w-4 group-hover:text-primary" />
            Sobre mim
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="group w-full justify-start gap-2"
          asChild
        >
          <Link href="/#skills">
            <MixIcon className="h-4 w-4 group-hover:text-primary" />
            Habilidades
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="group w-full justify-start gap-2"
          asChild
        >
          <Link href="/projects">
            <DashboardIcon className="h-4 w-4 group-hover:text-primary" />
            Projetos
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="group w-full justify-start gap-2"
          asChild
        >
          <Link href="/#contact">
            <RiContactsBook3Line className="h-4 w-4 group-hover:text-primary" />
            Contato
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="group w-full justify-start gap-2"
          asChild
        >
          <Link href="#social">
            <CiHashtag className="h-4 w-4 group-hover:text-primary" />
            Social
          </Link>
        </Button>
      </div>

      <Separator className="my-2" />

      <h2 className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
        Minha rede
      </h2>
      <div className="flex flex-col gap-0.5">
        <Button
          variant="ghost"
          className="group w-full justify-start gap-2"
          asChild
        >
          <Link href="http://github.com/gustavohps10" target="_blank">
            <FaGithub className="h-4 w-4 group-hover:text-primary" />
            Github
            <IoOpenOutline className="ml-auto text-[#2e2b46] dark:text-primary" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="group w-full justify-start gap-2"
          asChild
        >
          <Link
            href="https://www.linkedin.com/in/guhenriquesantos/"
            target="_blank"
          >
            <FaLinkedin className="h-4 w-4 group-hover:text-primary" />
            Linkedin
            <IoOpenOutline className="ml-auto text-[#2e2b46] dark:text-primary" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="group w-full justify-start gap-2"
          asChild
        >
          <Link href="https://www.reddit.com/user/gustavohps10" target="_blank">
            <FaReddit className="h-4 w-4 group-hover:text-primary" />
            Reddit
            <IoOpenOutline className="ml-auto text-[#2e2b46] dark:text-primary" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="group w-full justify-start gap-2"
          asChild
        >
          <Link
            href="https://steamcommunity.com/profiles/76561198418956544/"
            target="_blank"
          >
            <FaSteam className="h-4 w-4 group-hover:text-primary" />
            Steam
            <IoOpenOutline className="ml-auto text-[#2e2b46] dark:text-primary" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="group w-full justify-start gap-2"
          asChild
        >
          <Link href="#">
            <FaDiscord className="h-4 w-4 group-hover:text-primary" />
            Discord
            <IoOpenOutline className="ml-auto text-[#2e2b46] dark:text-primary" />
          </Link>
        </Button>
      </div>
    </>
  )
}
