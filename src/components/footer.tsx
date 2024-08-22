import { FaDiscord, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Separator } from './ui/separator'
import { buttonVariants } from './ui/button'
import Link from 'next/link'

export function Footer() {
  return (
    <footer id="social" className="bg-[#0d102a] text-white">
      <div className="relative mx-auto flex h-full min-h-[560px] max-w-[90rem] flex-col justify-between p-12">
        <div className="flex flex-wrap gap-12 text-lg">
          <div>
            <span className="text-gray-500">Contate-me</span>
            <ul className="text-gray-200">
              <li>gustavoh.santos735@gmail.com</li>
              <li>(44) 98805-4126</li>
            </ul>
          </div>
          <div>
            <span className="text-gray-500">Social</span>
            <ul className="text-gray-200">
              <li>
                <Link
                  href="http://github.com/gustavohps10"
                  target="_blank"
                  className="flex items-center gap-2 border-2 border-transparent hover:border-b-gray-200"
                >
                  <FaGithub /> Github
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/guhenriquesantos/"
                  target="_blank"
                  className="flex items-center gap-2 border-2 border-transparent hover:border-b-gray-200"
                >
                  <FaLinkedin /> Linkedin
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.discord.com"
                  target="_blank"
                  className="flex items-center gap-2 border-2 border-transparent hover:border-b-gray-200"
                >
                  <FaDiscord /> Discord
                </Link>
              </li>
              <li>
                <Link
                  href="http://wa.me/5544988054126"
                  target="_blank"
                  className="flex items-center gap-2 border-2 border-transparent hover:border-b-gray-200"
                >
                  <FaWhatsapp /> Whatsapp
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Separator className="my-4" />
          <span className="block text-center">
            © Made with 💜 Gustavo Henrique {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}
