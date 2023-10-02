import { faDiscord, faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return(
        <>
            <div>
                <ul>
                <li className="title">Contate-me</li>
                <li className="my-email"> gustavoh.santos735@gmail.com</li>
                <li>(44) 98805-4126</li>
                </ul>
                <ul>
                <li className="title">Social</li>
                <li><a href="http://github.com/gustavohps10" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faGithub} />Github</a></li>
                <li><a href="https://www.linkedin.com/in/gustavo-henrique-pereira-dos-santos-69a423210/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedin} /> Linkedin</a></li>
                <li><a href="https://discord.com/invite/wY7rhAde5x" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faDiscord} /> Discord</a></li>
                <li><a href="http://wa.me/5544988054126" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faWhatsapp} /> Whatsapp</a></li>
                </ul>
            </div>
            <hr />
            <span>© Made with ❤️ Gustavo Henrique 2023</span>
        </>
    )
}