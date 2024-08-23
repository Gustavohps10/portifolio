import Link from 'next/link'
import { ToggleTheme } from './toggle-theme'
import {
  HamburgerMenuIcon,
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

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="fixed z-50 w-full bg-gray-50 px-4 py-2 shadow-md dark:bg-gray-950 md:mt-4 md:bg-transparent md:shadow-none md:dark:bg-transparent">
      <div className="mx-auto flex max-w-[94rem] items-center justify-between">
        <Link href="/" className="h-4">
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
        <div className="flex items-center gap-1">
          <ToggleTheme />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <HamburgerMenuIcon className="h-6 w-6 cursor-pointer text-primary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute -right-3 min-w-72 p-1">
              <DropdownMenuLabel className="text-xl">Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/">
                <DropdownMenuItem className="flex cursor-pointer items-center gap-4 text-lg">
                  <HomeIcon className="h-5 w-5" /> Home
                </DropdownMenuItem>
              </Link>
              <Link href="/#about">
                <DropdownMenuItem className="flex cursor-pointer items-center gap-4 text-lg">
                  <PersonIcon className="h-5 w-5" /> Sobre mim
                </DropdownMenuItem>
              </Link>
              <Link href="/#skills">
                <DropdownMenuItem className="flex cursor-pointer items-center gap-4 text-lg">
                  <MixIcon className="h-5 w-5" /> Habilidades
                </DropdownMenuItem>
              </Link>
              <Link href="/#contact">
                <DropdownMenuItem className="flex cursor-pointer items-center gap-4 text-lg">
                  <RiContactsBook3Line className="h-5 w-5" /> Contate-me
                </DropdownMenuItem>
              </Link>
              <Link href="#social">
                <DropdownMenuItem className="flex cursor-pointer items-center gap-4 text-lg">
                  <CiHashtag className="h-5 w-5" /> Social
                </DropdownMenuItem>
              </Link>
              <Link href="/projects">
                <DropdownMenuItem className="flex cursor-pointer items-center gap-4 text-lg">
                  <DashboardIcon className="h-5 w-5" /> Projetos
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <div className="mt-2 flex flex-wrap gap-1 p-2">
                <Link
                  href="https://github.com/Gustavohps10"
                  target="_blank"
                  className="flex max-w-max items-center overflow-hidden rounded-sm"
                >
                  <FaGithub className="h-5 w-5 bg-primary p-1 text-white" />
                  <span className="bg-secondary px-2 text-sm">Github</span>
                </Link>

                <Link
                  href="#"
                  target="_blank"
                  className="flex max-w-max items-center overflow-hidden rounded-sm"
                >
                  <FaDiscord className="h-5 w-5 bg-primary p-1 text-white" />
                  <span className="bg-secondary px-2 text-sm">Discord</span>
                </Link>

                <Link
                  href="https://steamcommunity.com/profiles/76561198418956544/"
                  target="_blank"
                  className="flex max-w-max items-center overflow-hidden rounded-sm"
                >
                  <FaSteam className="h-5 w-5 bg-primary p-1 text-white" />
                  <span className="bg-secondary px-2 text-sm">Steam</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/guhenriquesantos/"
                  target="_blank"
                  className="flex max-w-max items-center overflow-hidden rounded-sm"
                >
                  <FaLinkedin className="h-5 w-5 bg-primary p-1 text-white" />
                  <span className="bg-secondary px-2 text-sm">Linkedin</span>
                </Link>

                <Link
                  href="https://www.reddit.com/user/gustavohps10"
                  target="_blank"
                  className="flex max-w-max items-center overflow-hidden rounded-sm"
                >
                  <FaReddit className="h-5 w-5 bg-primary p-1 text-white" />
                  <span className="bg-secondary px-2 text-sm">Reddit</span>
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
