import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiHeroku, SiTypescript } from "react-icons/si";
import Portfolio_pic from '../images/portfolio_pic.jpg';

interface project_props {
    direction: string;
};

function PortfolioProject(props: project_props) {
    return (
        <div id={props.direction + "_project"}>
            <div id={props.direction + "_project_details"}>
                <div id={props.direction + "_project_github"}>
                    <h2 id={props.direction + "_project_link"}>
                        <a href="#header" target="_blank" rel="noopener noreferrer" title="See Portfolio">Portfolio</a>
                    </h2>
                    <a href="https://github.com/jerrylj2/My_Portfolio" target="_blank" rel="noopener noreferrer" id={props.direction + "_project_github_link"}>
                        <FaGithub className="icons icons_projects" title="GitHub" />
                    </a>
                </div>
                <div>
                    <p><strong>This portfolio which was developed using ReactJS!</strong></p>
                </div>
                <div>
                    <FaReact className="icons icons_projects" title="ReactJS" />
                    <FaHtml5 className="icons icons_projects" title="HTML5" />
                    <FaCss3Alt className="icons icons_projects" title="CSS" />
                    <SiTypescript className="icons icons_projects" title="TypeScript" />
                    <SiHeroku className="icons icons_projects" title="Heroku" />
                </div>
            </div>
            <div id={props.direction + "_project_pic_container"}>
                <img src={Portfolio_pic} alt="Portfolio" id={props.direction + "_project_pic"}></img>
            </div>
        </div>
    )
}

export default PortfolioProject;