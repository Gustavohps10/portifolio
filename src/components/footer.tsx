import { FaDiscord, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Separator } from './ui/separator'

export function Footer() {
  return (
    <footer id="social" className="bg-[#0d102a] text-white">
      <div className="relative mx-auto flex h-full min-h-[560px] max-w-[90rem] flex-col justify-between p-12">
        <div className="flex gap-12 text-lg">
          <div>
            <span className="text-slate-500">Contate-me</span>
            <ul className="text-slate-200">
              <li>gustavoh.santos735@gmail.com</li>
              <li>(44) 98805-4126</li>
            </ul>
          </div>
          <div>
            <span className="text-slate-500">Social</span>
            <ul className="text-slate-200">
              <li className="flex items-center gap-2">
                <FaGithub /> Github
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin /> Linkedin
              </li>
              <li className="flex items-center gap-2">
                <FaDiscord /> Discord
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp /> Whatsapp
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
