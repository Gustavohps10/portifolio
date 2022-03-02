import { Navbar } from "../components/Navbar";

import '../styles/home.scss'
import homeImg from '../assets/images/home-img.svg'
import aboutImg from '../assets/images/about.svg'
import skillsImg from '../assets/images/skills.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDiscord, faGithub, faLinkedin, faWhatsapp, faHtml5, faCss3Alt, faJs, faPhp, faReact, faBootstrap, faGitAlt, faPython} from '@fortawesome/free-brands-svg-icons'
import {faPager} from '@fortawesome/free-solid-svg-icons'

import {useEffect, useRef, useState} from "react";

import Projects from '../data/projects.json'

export function Home(){
    const sectionsContainer = useRef<HTMLDivElement | null>(null);
    const [menuBtnIsLight, setMenuBtnIsLight] = useState(false);
    const [refVisible, setRefVisible] = useState(false);

    useEffect(() => {
      if (!refVisible) { 
        return
      }
    }, [refVisible])


    const sectionsBtnLight = [
      sectionsContainer.current?.children[5],
      sectionsContainer.current?.children[2]
    ];

    function checkIfSectionIsVisible(sections: Array<Element | undefined>) {
      let visible = false;

      if(sections.length > 0){
        sections.map((section) =>{
          if(section?.getBoundingClientRect().top === 0){
            visible = true;
          }
        })
      }
  
      return visible;
    }

    function handleScroll(deltaY: number){
      if(window.screen.width > 1024){
        deltaY > 0 
        ? sectionsContainer.current?.scrollBy(0, 200)
        : sectionsContainer.current?.scrollBy(0, -200);
      }
    }

    return(
    <>
        <Navbar isLight={menuBtnIsLight}/>

        <div
          ref={el => { sectionsContainer.current = el; setRefVisible(!!el); }}
          className="sections"
          onWheel= {(e) => {handleScroll(e.deltaY)}}
          onScroll={() => {  
            setMenuBtnIsLight(checkIfSectionIsVisible(sectionsBtnLight));
          }}
        >

          <section id="home">
              <aside>
                  <div>
                      <h1>Oi, eu sou 
                      <br/>Gustavo Henrique</h1>
                      <p>
                        Desenvolvedor Web e entusiasta de tecnologia
                      </p>
                  </div>
              </aside>
              <div>
                  <img src={homeImg} alt="HOME" />
              </div>
          </section>

          <section id="about">
  
            <img src={aboutImg} alt="About" />
            
            <div className="content">
                <h1>Sobre mim</h1>
                <p>
                  Sou um desenvolvedor Web localizado em Maringá-PR. Solucionar problemas através das linhas de código é meu principal objetivo.
                </p>
                <p>Comecei na programação há 2 anos, desde então venho aprimorando meus conhecimentos consumindo cursos, videoaulas e aplicando o que aprendi em diversos projetos pessoais.</p>
              <a href="https://www.linkedin.com/in/gustavo-henrique-pereira-dos-santos-69a423210/" target="_blank" className="especial-buttom">Meu Linkedin <FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
            </div>
          </section>

          <section id="skills">
            <div className="content">
                <h1>Habilidades</h1>
                <p>
                  Inicialmente decidi focar meu aprendizado em HTML, CSS e JavaScript para o front-end e PHP para o back-end. 
                  Também vi um pouco de C# com Windows Forms e .NET Framework. 
                  Depois resolvi aprofundar minhas habilidades em PHP partindo para o framework LARAVEL e recentemente me rendi ao JavaScript, React e Node.
                  <br />
                  Abaixo estão algumas das linguagens, frameworks e ferramentas que já experimentei:
                </p>

                <div className="technologies">
                  <svg viewBox="0 0 128 128" className="tech">
                    <path d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0"></path><path d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0"></path><path d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0"></path>
                  </svg>
                  
                  <FontAwesomeIcon className="tech" icon={faHtml5} />
                  <FontAwesomeIcon className="tech" icon={faCss3Alt} />
                  <FontAwesomeIcon className="tech" icon={faJs} />
                  <FontAwesomeIcon className="tech" icon={faPhp} />
                  <svg viewBox="0 0 128 128" className="tech">
                    <path fill="#fff" d="M14.887 18.316l2.72 4.523 2.507 4.182c1.301 2.17 2.602 4.34 3.901 6.51l2.662 4.44 3.882 6.465 4.749 7.936c1.369 2.285 2.741 4.569 4.112 6.853l.184.267c.199.062.357.009.521-.03 1.807-.434 3.614-.865 5.421-1.296 2.931-.7 5.862-1.398 8.792-2.099l4.592-1.098c2.962-.708 5.926-1.414 8.889-2.124 2.996-.716 5.99-1.436 8.985-2.154 1.514-.363 3.028-.725 4.543-1.086l8.792-2.096 9.575-2.28.517-.14-.141-.28c-.869-1.232-1.742-2.462-2.613-3.693l-2.581-3.654-2.76-3.898-2.639-3.737-2.614-3.693-2.701-3.816-2.646-3.731-1.396-1.969a3.647 3.647 0 01-.497-.982c-.275-.856.039-1.425.538-1.846a3.018 3.018 0 011.1-.593 17.382 17.382 0 011.702-.432c1.151-.217 2.309-.402 3.465-.594 1.304-.217 2.609-.424 3.915-.639.825-.136 1.65-.279 2.476-.419l3.367-.567a927.64 927.64 0 013.269-.543l3.568-.583 2.477-.417c.94-.157 1.882-.314 2.823-.468 1.174-.191 2.346-.384 3.521-.568.698-.109 1.399-.148 2.093.052.521.151.994.395 1.436.706l.61.426c.061-.141-.027-.217-.067-.298a14.062 14.062 0 00-3.606-4.592 13.894 13.894 0 00-4.773-2.616c-1.04-.33-2.109-.483-3.199-.565l-.535-.08H24.561l-.429.069c-.954.075-1.892.217-2.815.47a13.74 13.74 0 00-5.401 2.885 13.768 13.768 0 00-2.435 2.727 13.743 13.743 0 00-2.156 5.189l.461.803c1.033 1.726 2.067 3.449 3.101 5.173zm5.241 87.825c.97.373 1.972.635 3.006.762l1.047.047c.163.021.32.05.48.05h32.288c-.052 0-.099-.149-.157-.25-1.271-2.168-2.554-4.296-3.81-6.472a1113.602 1113.602 0 01-4.705-8.233c-1.664-2.944-3.313-5.89-4.965-8.842a4986.932 4986.932 0 01-4.698-8.42c-.944-1.698-1.883-3.396-2.825-5.095l-.252-.388-.458.091c-.908.234-1.814.471-2.721.709-1.262.332-2.522.67-3.785 1-2.834.738-5.669 1.471-8.503 2.207-2.883.748-5.704 1.498-8.589 2.243-.175.046.519.062-.481.092v17.905c1 .104.136.294.158.477.066.53.085 1.064.179 1.59a13.427 13.427 0 002.224 5.378c1.664 2.392 3.852 4.103 6.567 5.149zm-6.122-40.39l10.008-2.377 4.396-1.039c.732-.174 1.468-.341 2.194-.537.646-.175.727-.389.394-.973-.481-.844-.97-1.682-1.458-2.522l-4.288-7.383-4.287-7.385-4.364-7.513-3.736-6.427-1.553-2.781c-.1-.17.689-.371-.311-.461v40.135c0-.027.204-.05.333-.081l2.672-.656zm102.671 28.688c-1.308.465-2.615.933-3.923 1.401a31869.44 31869.44 0 00-8.93 3.202c-1.652.593-3.304 1.193-4.959 1.784-3.371 1.204-6.744 2.403-10.117 3.604-1.955.696-3.91 1.325-5.863 2.024-.535.193-1.063.546-1.593.546h22.431l.484-.046a12.14 12.14 0 001.691-.181 13.742 13.742 0 006.191-2.815 13.962 13.962 0 003.438-4.016c.92-1.606 1.466-3.329 1.728-5.153.023-.157.072-.328-.06-.491-.184-.014-.349.08-.518.141zm-1.927-30.121c-.99-1.353-1.98-2.704-2.968-4.058-1.362-1.869-2.723-3.74-4.083-5.609-.553-.759-1.113-1.512-1.654-2.279-.162-.231-.348-.292-.601-.224l-.145.042-7.517 1.823-4.489 1.089-8.782 2.133-8.687 2.111c-3.01.729-6.02 1.456-9.028 2.186-2.961.719-5.921 1.44-8.881 2.16l-8.589 2.085c-1.513.367-3.025.733-4.537 1.103-.223.054-.463.067-.699.247l.202.385c1.268 2.19 2.535 4.379 3.806 6.567 1.438 2.478 2.878 4.955 4.321 7.43 1.587 2.72 3.178 5.439 4.768 8.159.913 1.562 1.821 3.127 2.742 4.685a543.92 543.92 0 003.094 5.178c.312.515.666 1.006 1.023 1.49.24.323.537.599.887.81.36.218.75.286 1.159.194.212-.048.419-.118.624-.189l.754-.279c2.74-.938 5.48-1.875 8.223-2.809 2.139-.729 4.28-1.453 6.421-2.177 2.125-.72 4.251-1.438 6.376-2.155l6.329-2.137c2.157-.729 4.314-1.458 6.471-2.189 2.647-.898 5.294-1.8 7.942-2.696 2.553-.864 5.107-1.723 7.662-2.584.156-.053.329-.075.459-.247l.016-.372c0-5.296-.001-10.594.006-15.891a1.16 1.16 0 00-.246-.738c-.801-1.077-1.588-2.162-2.379-3.244zm-.439-49.907c-.595-.753-1.352-.992-2.279-.75-.404.106-.819.172-1.23.248-1.351.247-2.701.49-4.052.735-1.976.359-3.951.722-5.928 1.077-1.564.282-3.131.558-4.696.833l-6.281 1.099c-.264.046-.53.092-.783.173-.37.119-.478.351-.309.699.139.284.311.556.497.812 1.298 1.79 2.604 3.576 3.908 5.362 1.798 2.463 3.598 4.926 5.397 7.388 1.522 2.083 3.046 4.166 4.57 6.248 1.197 1.637 2.395 3.272 3.593 4.908l.237.286c3.447-.853 6.889-1.703 10.39-2.568l.024-.538c0-7.208-.001-14.415.006-21.622 0-.318-.078-.574-.277-.826-.875-1.103-1.732-2.219-2.597-3.33l-.19-.234zm2.795 34.922c-1.572.377-3.149.737-4.759 1.163.171.303 4.585 6.262 4.842 6.544l.162.089.018-.363v-2.51c.002-1.455.006-2.911.002-4.366 0-.178.049-.367-.072-.547l-.193-.01zM12.93 127v-17.133h3.633V124h6.949v3H12.93zm24.047 0l-1.242-4.078h-6.246L28.246 127h-3.914l6.047-17.203h4.441L40.891 127h-3.914zm-2.11-7.125c-1.148-3.695-1.795-5.785-1.939-6.27s-.248-.867-.311-1.148c-.258 1-.996 3.473-2.215 7.418h4.465zm11.813.551V127h-3.633v-17.133h4.992c2.328 0 4.051.424 5.168 1.271s1.676 2.135 1.676 3.861c0 1.008-.277 1.904-.832 2.689s-1.34 1.4-2.355 1.846c2.578 3.852 4.258 6.34 5.039 7.465h-4.031l-4.09-6.574H46.68zm0-2.953h1.172c1.148 0 1.996-.191 2.543-.574s.82-.984.82-1.805c0-.812-.279-1.391-.838-1.734s-1.424-.516-2.596-.516H46.68v4.629zM69.379 127l-1.242-4.078h-6.246L60.648 127h-3.914l6.047-17.203h4.441L73.293 127h-3.914zm-2.109-7.125c-1.148-3.695-1.795-5.785-1.939-6.27s-.248-.867-.311-1.148c-.258 1-.996 3.473-2.215 7.418h4.465zm17.953-10.008h3.668L83.066 127h-3.961l-5.812-17.133h3.668l3.223 10.195c.18.602.365 1.303.557 2.104s.311 1.357.357 1.67c.086-.719.379-1.977.879-3.773l3.246-10.196zM100.914 127h-9.867v-17.133h9.867v2.977H94.68v3.762h5.801v2.977H94.68V124h6.234v3zm3.574 0v-17.133h3.633V124h6.949v3h-10.582z"></path>
                  </svg>

                  <FontAwesomeIcon className="tech" icon={faPython} />

                  <svg viewBox="0 0 128 128" className="tech">
                    <path fill="#fff" d="M126.5 83.8c0 3.8-3.1 6.9-6.9 6.9H8.4c-3.8 0-6.9-3.1-6.9-6.9V44.2c0-3.8 3.1-6.9 6.9-6.9h111.2c3.8 0 6.9 3.1 6.9 6.9v39.6z"></path><path fill="#6421ff" d="M23 45.6h6V73c-3 .6-5.3.8-7.7.8-7.2 0-11-3.3-11-9.5 0-6 4-10 10.2-10 1 0 1.7.1 2.6.3v-9H23zm0 13.8c-.7-.2-1.3-.3-2-.3-3 0-4.7 1.8-4.7 5.1 0 3.2 1.7 4.9 4.7 4.9.7 0 1.2 0 2-.2v-9.5zm15.4-4.6v13.7c0 4.7-.3 7-1.4 9-1 1.9-2.2 3.1-4.8 4.4l-5.5-2.6c2.6-1.2 3.9-2.3 4.7-4 .8-1.7 1.1-3.7 1.1-8.8V54.8h5.9zm-5.9-9.1h5.9v6.1h-5.9v-6.1zM42 56.1c2.6-1.2 5.1-1.8 7.8-1.8 3 0 5 .8 5.9 2.4.5.9.7 2 .7 4.5v12c-2.7.4-6 .7-8.5.7-5 0-7.2-1.7-7.2-5.6 0-4.2 3-6.1 10.2-6.7v-1.3c0-1.1-.5-1.5-2-1.5-2.2 0-4.7.6-7 1.8v-4.5h.1zm9.2 9.4c-3.9.4-5.2 1-5.2 2.5 0 1.2.7 1.7 2.3 1.7.9 0 1.7-.1 2.8-.3v-3.9h.1zm8.1-9.8c3.5-.9 6.4-1.3 9.3-1.3 3 0 5.2.7 6.5 2 1.2 1.3 1.6 2.7 1.6 5.6v11.6h-5.9V62.2c0-2.3-.8-3.1-2.9-3.1-.8 0-1.5.1-2.7.4v14.1h-5.9V55.7zM79 76.8c2.1 1.1 4.2 1.6 6.3 1.6 3.9 0 5.5-1.6 5.5-5.3V73c-1.2.6-2.3.8-3.8.8-5.2 0-8.5-3.4-8.5-8.8 0-6.7 4.9-10.5 13.5-10.5 2.5 0 4.9.3 7.7.8l-2 4.3c-1.6-.3-.1 0-1.3-.2v.6l.1 2.5v3.2c0 .8 0 1.6.1 2.4v1.6c0 5.1-.4 7.5-1.7 9.4-1.8 2.9-5 4.3-9.6 4.3-2.3 0-4.3-.3-6.4-1.2v-5.4h.1zm11.8-17.6h-.6c-1.2 0-2.5.3-3.4.8-1.4.8-2.2 2.3-2.2 4.3 0 3 1.5 4.7 4.1 4.7.8 0 1.5-.2 2.2-.4v-9.4h-.1zm18.2-4.9c5.9 0 9.5 3.7 9.5 9.8 0 6.2-3.8 10.1-9.8 10.1-5.9 0-9.6-3.7-9.6-9.7.1-6.3 3.9-10.2 9.9-10.2zm-.1 15c2.3 0 3.6-1.9 3.6-5.2 0-3.2-1.3-5.2-3.6-5.2s-3.7 1.9-3.7 5.2c.1 3.4 1.4 5.2 3.7 5.2z"></path>
                  </svg>

                  <svg viewBox="0 0 128 128" className="tech">
                    <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z" fill="#fff"></path>
                  </svg>

                  <svg viewBox="0 0 128 128" className="tech">
                    <path fill="#fff" d="M40.335 78.188H38.65v-9.65c0-.762.05-1.69.14-2.785h-.038c-.158.64-.303 1.104-.43 1.391L33.42 78.188h-.821l-4.911-10.964c-.138-.306-.283-.799-.43-1.471h-.036c.052.576.081 1.509.081 2.804v9.631h-1.626V63.817h2.225l4.409 10.021c.332.754.547 1.328.651 1.72h.069a32.45 32.45 0 01.688-1.762l4.505-9.979h2.11v14.371h.001zm5.188 0h-1.639V67.925h1.639v10.263zm.283-13.942c0 .303-.106.555-.317.763a1.04 1.04 0 01-.764.312 1.06 1.06 0 01-.757-.301 1.025 1.025 0 01-.313-.774c0-.296.104-.549.313-.754s.464-.305.757-.305c.3 0 .557.099.764.305.211.205.317.458.317.754M55.764 77.713c-.786.483-1.726.722-2.812.722-1.472 0-2.655-.488-3.561-1.464-.879-.947-1.321-2.169-1.321-3.667 0-1.681.48-3.042 1.45-4.077.964-1.036 2.261-1.553 3.892-1.553.892 0 1.683.174 2.375.521v1.687c-.766-.538-1.576-.805-2.445-.805-1.045 0-1.896.365-2.555 1.093-.687.745-1.034 1.742-1.034 2.985 0 1.194.317 2.14.948 2.837.633.694 1.476 1.042 2.538 1.042.897 0 1.738-.295 2.524-.882v1.561h.001zm7.84-8.123c-.289-.223-.706-.331-1.255-.331-.668 0-1.229.298-1.683.901-.516.673-.771 1.604-.771 2.795v5.232h-1.644V67.925h1.644v2.116h.039c.241-.749.614-1.325 1.112-1.733a2.456 2.456 0 011.572-.561c.438 0 .762.047.984.14l.002 1.703zm9.154 3.485c0-1.313-.296-2.317-.89-3.006-.575-.662-1.38-.992-2.416-.992-1.021 0-1.841.334-2.453 1.003-.647.715-.971 1.725-.971 3.035 0 1.228.308 2.192.93 2.879.618.692 1.45 1.039 2.494 1.039 1.08 0 1.907-.352 2.474-1.051.555-.684.832-1.652.832-2.907m1.685-.057c0 1.635-.462 2.949-1.382 3.934-.924.989-2.167 1.483-3.73 1.483-1.54 0-2.767-.494-3.665-1.483-.881-.953-1.323-2.211-1.323-3.776 0-1.786.5-3.162 1.503-4.139.929-.906 2.17-1.363 3.726-1.363 1.53 0 2.726.477 3.587 1.422.853.95 1.284 2.258 1.284 3.922m8.146 2.424c0 .84-.313 1.536-.942 2.091-.687.601-1.63.901-2.816.901-.971 0-1.822-.203-2.545-.618V76.05c.804.654 1.692.983 2.667.983 1.301 0 1.952-.479 1.952-1.434a1.27 1.27 0 00-.431-.991c-.289-.262-.851-.576-1.685-.943-.859-.376-1.472-.762-1.833-1.163-.434-.476-.652-1.093-.652-1.854 0-.852.341-1.561 1.014-2.125.675-.567 1.542-.85 2.606-.85.815 0 1.546.159 2.194.481v1.654c-.677-.488-1.451-.732-2.329-.732-.544 0-.981.136-1.307.399-.329.27-.494.614-.494 1.034 0 .455.138.808.412 1.061.244.233.761.519 1.541.852.876.367 1.509.748 1.895 1.137.5.494.753 1.121.753 1.883m10.04-2.367c0-1.313-.297-2.317-.892-3.006-.575-.662-1.381-.992-2.415-.992-1.021 0-1.841.334-2.456 1.003-.646.715-.969 1.725-.969 3.035 0 1.228.309 2.192.924 2.879.626.692 1.459 1.039 2.501 1.039 1.082 0 1.906-.352 2.474-1.051.555-.684.833-1.652.833-2.907m1.688-.057c0 1.635-.466 2.949-1.388 3.934-.92.989-2.163 1.483-3.727 1.483-1.542 0-2.768-.494-3.667-1.483-.881-.953-1.323-2.211-1.323-3.776 0-1.786.504-3.162 1.502-4.139.928-.906 2.171-1.363 3.728-1.363 1.531 0 2.725.477 3.584 1.422.855.95 1.291 2.258 1.291 3.922M101.555 64.438a2.2 2.2 0 00-1.091-.27c-1.15 0-1.721.724-1.721 2.175v1.582h2.405v1.392h-2.405v8.871h-1.645v-8.871h-1.745v-1.392h1.745v-1.664c0-1.129.346-2.016 1.05-2.654.603-.555 1.34-.831 2.217-.831.508 0 .902.061 1.189.178v1.484zm6.484 13.647c-.388.222-.904.333-1.543.333-1.791 0-2.687-1.01-2.687-3.029v-6.07h-1.761v-1.394h1.761v-2.504l1.646-.533v3.037h2.583v1.394h-2.583v5.791c0 .688.112 1.18.348 1.465.237.295.625.439 1.173.439.409 0 .763-.109 1.063-.331v1.402zm-88.802 40.157c0 .805-.286 1.5-.867 2.087a2.845 2.845 0 01-2.102.88 2.736 2.736 0 01-2.05-.88 2.915 2.915 0 01-.841-2.087c0-.827.279-1.525.841-2.103a2.742 2.742 0 012.05-.867c.823 0 1.524.292 2.102.878.581.588.867 1.286.867 2.092M56.018 120.606H50.66L31.212 90.572a13.803 13.803 0 01-1.179-2.365h-.16c.139.804.209 2.531.209 5.175v27.224h-4.416v-37.68h5.732l18.865 29.56c.751 1.173 1.265 2.013 1.525 2.519h.104c-.175-1.083-.266-2.932-.266-5.54V82.926h4.39v37.68h.002zm28.314 0H64.361v-37.68h19.104v3.993h-14.69v12.534h13.612v3.995H68.774v13.164h15.558v3.994zm30.291-33.687h-10.854v33.688h-4.415V86.919H88.479v-3.995h26.144v3.995z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#fff" d="M82.108 46.33c.479-1.232 1.022-2.445 1.427-3.701 2.288-7.097 4.554-14.2 6.805-21.309.865-2.731 1.813-5.42 3.515-7.767 2.692-3.709 6.442-5.652 10.88-6.331a37.456 37.456 0 015.28-.406c5.267-.05 10.536-.015 15.804-.01.28 0 .56.029.957.052-.129.304-.199.525-.311.724-1.955 3.494-3.872 7.009-5.885 10.468-3.505 6.022-7.016 12.042-10.631 17.998-2.319 3.819-4.834 7.52-7.687 10.974-2.105 2.548-4.321 4.984-7.146 6.77-1.925 1.217-3.981 1.929-6.315 1.917-8.278-.045-16.556-.012-24.834-.024-2.461-.004-4.568-.941-6.356-2.603-2.563-2.381-4.093-5.412-5.345-8.608-2.284-5.835-3.563-11.951-5.031-18.014-.688-2.838-1.47-5.654-2.215-8.478-.048-.183-.142-.354-.25-.617l-.577.542c-3.228 3.207-6.071 6.741-8.615 10.498-.693 1.024-.926 2.374-1.313 3.591-1.424 4.47-2.722 8.983-4.264 13.411-1.477 4.242-4.125 7.616-8.264 9.61a18.565 18.565 0 01-7.689 1.855c-3.98.088-7.962.098-11.943.134-.952.009-.996-.069-.748-.99 1.707-6.338 3.87-12.514 6.58-18.492 2.794-6.167 6.085-12.048 10.231-17.419 2.823-3.657 5.941-7.031 9.843-9.582 1.979-1.293 4.083-2.315 6.477-2.584.394-.045.793-.073 1.189-.073 8.478-.004 16.956.082 25.433-.039 4.547-.065 7.839 1.855 10.304 5.515 1.533 2.276 2.63 4.761 3.553 7.328 1.861 5.178 3.018 10.547 4.325 15.878.748 3.051 1.581 6.081 2.379 9.12.06.228.157.446.238.668l.199-.006z"></path>
                  </svg>
                
                  <FontAwesomeIcon className="tech" icon={faReact} />

                  <svg viewBox="0 0 128 128" className="tech">
                    <path fill="#fff" d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"></path>
                  </svg>

                  <svg viewBox="0 0 128 128" className="tech">
                    <path fill="#fff" d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"></path>
                  </svg>

                  <FontAwesomeIcon className="tech" icon={faBootstrap} />
                  <FontAwesomeIcon className="tech" icon={faGitAlt} />
                  <FontAwesomeIcon className="tech" icon={faGithub} />
                </div>

                <a href="https://github.com/gustavohps10" target="_blank" className="especial-buttom">Meu Github <FontAwesomeIcon className="icon" icon={faGithub} /></a>
            </div>
            <img src={skillsImg} alt="Skills" />
          </section>

          <section id="portifolio">
            <div>
              <h1>Portifolio</h1>
              <div className="box-container">
                {
                  Projects.map(project =>{
                  return(
                    <div className="box" key={project.id}>
                      <img src={project.image} />
                    
                      <div className="content">
                        <span>{project.name}</span>
                        <p className="description">
                        {project.description}
                        </p>
                      </div>
                      <div className="icons">
                          <a href={project.github} target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                          
                          {project.website ? (<a href={project.website} target="_blank"><FontAwesomeIcon className="icon" icon={faPager} /></a>) :null}
                          
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
                         
          </section>

          <section id="contact">
            
            <div>
              <h1>Precisa de um desenvolvedor? Entre em contato</h1>
              <form action="https://formsubmit.co/gustavoh.santos735@gmail.com" method="POST">
                <label>Nome</label>
                <input type="text" name="name" placeholder="Digite seu nome"/>
                <br />

                <label>Email</label>
                <input type="email" name="email" placeholder="Digite seu email"/>
                <br />

                <label>Mensagem</label>
                <textarea placeholder="Digite uma mensagem" name="message"></textarea>
                <br />

                <button className="especial-buttom" type="submit">Enviar</button>
              </form>
            </div>

          </section>

          <section id="social">
            <div>
              <ul>
                <li className="title">Contate-me</li>
                <li className="my-email"> gustavoh.santos735@gmail.com</li>
                <li>(44) 98462-8599</li>
              </ul>
              <ul>
                <li className="title">Social</li>
                <li><a href="http://github.com/gustavohps10" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} />Github</a></li>
                <li><a href="https://www.linkedin.com/in/gustavo-henrique-pereira-dos-santos-69a423210/" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedin} /> Linkedin</a></li>
                <li><a href="https://discord.com/invite/wY7rhAde5x" target="_blank"><FontAwesomeIcon className="icon" icon={faDiscord} /> Discord</a></li>
                <li><a href="http://wa.me/5544984628599" target="_blank"><FontAwesomeIcon className="icon" icon={faWhatsapp} /> Whatsapp</a></li>
              </ul>
            </div>
            <hr />
            <span>© Made with ❤️ Gustavo Henrique 2022</span>
          </section>
        </div>
    </> 
    )
}