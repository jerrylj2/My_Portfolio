import React from 'react'
import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaJava, FaPython, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiFlask, SiR, SiVisualstudiocode, SiMicrosoftsqlserver, SiMicrosoftexcel, SiHeroku, SiTypescript, SiMaterialui } from "react-icons/si";

function Skills() {
    return (
        <div id="skills">
            <h1>Skills</h1>
            <h2>Here are some skills, tools, and technologies that I use:</h2>
            <div>
                <FaJsSquare className="icons icons_skills_contact icons_skills" title="JavaScript" />
                <FaReact className="icons icons_skills_contact icons_skills" title="ReactJS" />
                <SiTypescript className="icons icons_skills_contact icons_skills" title="TypeScript" />
                <SiMaterialui className="icons icons_skills_contact icons_skills" title="Material UI" />
                <FaNodeJs className="icons icons_skills_contact icons_skills" title="Node.js" />
                <FaHtml5 className="icons icons_skills_contact icons_skills" title="HTML5" />
                <FaCss3Alt className="icons icons_skills_contact icons_skills" title="CSS" />
                <FaGitAlt className="icons icons_skills_contact icons_skills" title="Git" />
                <FaGithub className="icons icons_skills_contact icons_skills" title="GitHub" />
                <FaJava className="icons icons_skills_contact icons_skills" title="Java" />
                <FaPython className="icons icons_skills_contact icons_skills" title="Python" />
                <SiFlask className="icons icons_skills_contact icons_skills" title="Flask" />
                <SiR className="icons icons_skills_contact icons_skills" title="R, R Shiny, R Markdown" />
                <SiVisualstudiocode className="icons icons_skills_contact icons_skills" title="Visual Studio Code" />
                <SiMicrosoftsqlserver className="icons icons_skills_contact icons_skills" title="SQL Server" />
                <SiMicrosoftexcel className="icons icons_skills_contact icons_skills" title="Excel" />
                <SiHeroku className="icons icons_skills_contact icons_skills" title="Heroku" />
            </div>
        </div>
    )
}

export default Skills;