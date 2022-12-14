import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiHeroku, SiTypescript } from "react-icons/si";
import Calc_pic from '../images/calculator.jpg';

interface  project_props {
    direction: string;
};

function CalculatorProject(props: project_props) {
    return (
        <div id={props.direction + "_project"}>
            <div id={props.direction + "_project_details"}>
                <div id={props.direction + "_project_github"}>
                    <h2 id={props.direction + "_project_link"}>
                        <a href="https://calculator-jerryjackson.herokuapp.com/" target="_blank" rel="noopener noreferrer" title="See Calculator">Calculator</a>
                    </h2>
                    <a href="https://github.com/jerrylj2/Calculator" target="_blank" rel="noopener noreferrer" id={props.direction + "_project_github_link"}>
                        <FaGithub className="icons icons_projects" title="GitHub" />
                    </a>
                </div>
                <div>
                    <p><strong>A web app calculator developed using ReactJS and TypeScript!</strong></p>
                </div>
                <div>
                    <FaReact className="icons icons_projects" title="ReactJS" />
                    <SiTypescript className="icons icons_projects" title="TypeScript" />
                    <FaHtml5 className="icons icons_projects" title="HTML5" />
                    <FaCss3Alt className="icons icons_projects" title="CSS" />
                    <SiHeroku className="icons icons_projects" title="Heroku" />
                </div>
            </div>
            <div id={props.direction + "_project_pic_container"}>
                <img src={Calc_pic} alt="Calculator" id={props.direction + "_project_pic"}></img>
            </div>
        </div>
    )
}

export default CalculatorProject;