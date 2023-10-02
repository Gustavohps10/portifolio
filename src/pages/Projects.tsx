import { useContext, useState } from "react";
import { faHome, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";

import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

import projectsList from '../data/projects.json'

import "../styles/projects.scss" 

import Section from "../styles/Section.styled";
import ModalStyled from "../styles/Modal.styled";
import { Button } from "../styles/Button.styled";
import { ThemeContext } from "styled-components";
ModalStyled.setAppElement("body")

interface ProjectProps {
    id: number,
    name: string
    logo?: string
    image: string
    github: string
    website?: string 
    description: string
    longDescription: string
    shields: {
        light: Array<string>
        dark: Array<string>
    }
}

export default function Projects() {
    const theme = useContext(ThemeContext)
    const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setSelectedProject(null)
        setModalIsOpen(false);
    }

    return(
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Meus Projetos - Gustavo Henrique</title>
                </Helmet>
            </HelmetProvider>

            <Navbar isLight={false}>
                <ul>
                    <li><Link to="/"><FontAwesomeIcon className="icon" icon={faHome} /> Home</Link></li>
                </ul>
            </Navbar>
            
            <ModalStyled
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <div>
                    <img className="main-image" src={selectedProject?.image} alt={selectedProject?.name} />
                    
                    <h1>{selectedProject?.name}</h1>
                    {selectedProject?.logo && 
                    <img src={selectedProject.logo} />
                    }
                    <p className="description">{selectedProject?.longDescription}</p>

                    <div className="shields-containter">
                    {theme?.title === "dark" && selectedProject?.shields.dark.map((shield)=>{
                        return(
                        <img key={shield} src={shield}/>
                        )
                    })}

                    {theme?.title === "light" && selectedProject?.shields.light.map((shield)=>{
                        return(
                        <img key={shield} src={shield}/>
                        )
                    })}
                    </div>

                    <hr />

                    <footer>
                        <Button
                            as="a"
                            target="_blank" 
                            href={selectedProject?.github}
                            className="small"
                            $fillType="filled"
                            $textColor="#fff"
                            $backgroundColor={theme?.colors.primary}
                            $borderColor={theme?.colors.primary}
                            $hoverTextColor="#fff"
                            $hoverBackgroundColor="#533793"
                        >
                            <FontAwesomeIcon className="icon" icon={faGithub} />
                            Código Fonte
                        </Button>

                        {selectedProject?.website &&
                            <Button
                                as="a"
                                target="_blank" 
                                href={selectedProject?.website}
                                className="small"
                                $fillType="filled"
                                $textColor="#fff"
                                $backgroundColor={theme?.colors.primary}
                                $borderColor={theme?.colors.primary}
                                $hoverTextColor="#fff"
                                $hoverBackgroundColor="#533793"
                            >
                                <FontAwesomeIcon className="icon" icon={faWindowMaximize} />
                                Website
                            </Button>
                        }
                    </footer>
                
                </div>
            </ModalStyled>

            <Section id="projects">
                <div>
                    <h1>Projetos</h1>
                    <h2>Uma pequena demonstração do que já desenvolvi ao longo da minha jornada.</h2>
                    <div className="box-container">
                        {
                        projectsList.map(project =>{
                            return(
                                <div className="box" key={project.id} onClick={()=>{setSelectedProject(project); setModalIsOpen(true)}}>
                                    <img src={project.image} />
                                    
                                    <div className="content">
                                        <span>{project.name}</span>
                                        <p className="description">
                                        {project.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>  
                </div>  
            </Section>

            
          <Section id="social">
            <Footer/>
          </Section>
        </>
    )
}