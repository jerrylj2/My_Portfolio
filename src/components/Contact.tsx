import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiGmail, SiLinkedin } from "react-icons/si";

function Contact() {
    return (
        <div id="contact">
            <h1 id="contact_title">Contact</h1>
            <p id="contact_content"><strong>Feel free to reach out below!</strong></p>
            <div id="contact_icons">
                <div>
                    <a href="mailto:jerryljackson3@gmail.com">
                        <SiGmail className="icons icons_skills_contact icons_contact" title="Gmail" />
                    </a>
                </div>
                <span className="icon_spacing"></span>
                <div>
                    <a href="https://www.linkedin.com/in/jerry-jackson-acas-a508a5132/" target="_blank" rel="noopener noreferrer">
                        <SiLinkedin className="icons icons_skills_contact icons_contact" title="LinkedIn" />
                    </a>
                </div>
                <span className="icon_spacing"></span>
                <div>
                    <a href="https://github.com/jerrylj2" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icons icons_skills_contact icons_contact" title="GitHub" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;