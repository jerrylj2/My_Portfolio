import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import Portfolio_pic from '../images/portfolio_pic.jpg';

function PortfolioProject() {
    return (
        <div id="portfolio">
            <div id="portfolio_pic_container">
                <img src={Portfolio_pic} alt="Portfolio" id="portfolio_pic"></img>
            </div>
            <div id="portfolio_details">
                <div id="portfolio_github">
                    <h2 id="portfolio_link">
                        <a href="#header" target="_blank" rel="noopener noreferrer" title="See Portfolio">Portfolio</a>
                    </h2>
                    <a href="https://github.com/jerrylj2/My_Portfolio" target="_blank" rel="noopener noreferrer" id="portfolio_github_link">
                        <FaGithub className="icons icons_projects" title="GitHub" />
                    </a>
                </div>
                <div>
                    <p><strong>This portfolio which was developed using React!</strong></p>
                </div>
                <div>
                    <FaReact className="icons icons_projects" title="ReactJS" />
                    <FaHtml5 className="icons icons_projects" title="HTML5" />
                    <FaCss3Alt className="icons icons_projects" title="CSS" />
                    <SiHeroku className="icons icons_projects" title="Heroku" />
                </div>
            </div>
        </div>
    )
}

export default PortfolioProject;