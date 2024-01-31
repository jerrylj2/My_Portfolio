import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiMaterialui, SiAwsamplify } from "react-icons/si";
import Stat_Quiz_pic from '../images/stat_quiz_pic.jpg';

interface  project_props {
    direction: string;
};

function StatQuizProject(props: project_props) {
    return (
        <div id={props.direction + "_project"}>
            <div id={props.direction + "_project_details"}>
                <div id={props.direction + "_project_github"}>
                    <h2 id={props.direction + "_project_link"}>
                        <a href="https://statquizchallenge-f5b5e7a39859.herokuapp.com/" target="_blank" rel="noopener noreferrer" title="See Stat Quiz Challenge">Stat Quiz Challenge</a>
                    </h2>
                    <a href="https://github.com/jerrylj2/Stat_Quiz_Challenge" target="_blank" rel="noopener noreferrer" id={props.direction + "_project_github_link"}>
                        <FaGithub className="icons icons_projects" title="GitHub" />
                    </a>
                </div>
                <div>
                    <p><strong>Can you beat the Stat Quiz Challenge? This app is developed using TypeScript, ReactJS and Material UI!</strong></p>
                </div>
                <div>
                    <FaReact className="icons icons_projects" title="ReactJS" />
                    <SiMaterialui className="icons icons_projects" title="Material UI" />
                    <SiTypescript className="icons icons_projects" title="TypeScript" />
                    <FaHtml5 className="icons icons_projects" title="HTML5" />
                    <FaCss3Alt className="icons icons_projects" title="CSS" />
                    <SiAwsamplify className="icons icons_projects" title="AWS Amplify" />
                </div>
            </div>
            <div id={props.direction + "_project_pic_container"}>
                <img src={Stat_Quiz_pic} alt="Calculator" id={props.direction + "_project_pic"}></img>
            </div>
        </div>
    )
}

export default StatQuizProject;