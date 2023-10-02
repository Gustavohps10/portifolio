import { faHome, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

import projectsList from '../data/projects.json'
import Modal from "../components/Modal";

import "../styles/projects.scss" 
import { useState } from "react";
import { faDiscord, faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";
import Section from "../styles/Section.styled";
import Footer from "../components/Footer";

interface ProjectType {
    id: number,
    name: string
    logo?: string
    image: string
    github: string
    website?: string 
    description: string
    longDescription: string
    shields: Array<string>
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)
    const [modalVisible, setModalVisible] = useState(false)
    
    function handleModalClick(target: Element) {
        if(target.classList.contains("modal-box")){
          setModalVisible(false)
        }
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

            
            <Modal onClick={(e) => handleModalClick(e.target as Element)} visible={modalVisible}>
                <div>
                    <img className="main-image" src={selectedProject?.image} alt={selectedProject?.name} />
                    
                    <h1>{selectedProject?.name}</h1>
                    {selectedProject?.logo && 
                    <img src={selectedProject.logo} />
                    }
                    <p className="description">{selectedProject?.longDescription}</p>

                    <div className="shields-containter">
                    {selectedProject?.shields.map((shield)=>{
                        return(
                        <img key={shield} src={shield}/>
                        )
                    })}
                    </div>

                    <hr />

                    <footer>
                        <a href={selectedProject?.github} target="_blank" className="special-button">
                            <FontAwesomeIcon className="icon" icon={faGithub} />
                            Código fonte
                        </a>

                        {selectedProject?.website &&
                            <a href={selectedProject.website} target="_blank" className="special-button">
                            <FontAwesomeIcon className="icon" icon={faWindowMaximize} />
                            Website
                            </a>
                        }
                    </footer>
                
                </div>
            </Modal>

            <Section id="projects">
                <div>
                    <h1>Projetos</h1>
                    <h2>Uma pequena demonstração do que já desenvolvi ao longo da minha jornada.</h2>
                    <div className="box-container">
                        {
                        projectsList.map(project =>{
                        return(
                            <div className="box" key={project.id} onClick={()=>{setSelectedProject(project); setModalVisible(true)}}>
                            <img src={project.image} />
                            
                            <div className="content">
                                <span>{project.name}</span>
                                <p className="description">
                                {project.description}
                                </p>
                            </div>
                            </div>
                        );
                        })}
                    </div>  
                </div>  
            </Section>

            
          <Section id="social">
            <Footer/>
          </Section>
        </>
    )
}