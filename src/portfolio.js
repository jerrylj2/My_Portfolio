import './portfolio.css';
import My_pic from './images/my_picture.jpg';
import Calc_pic from './images/calculator.jpg';
import Portfolio_pic from './images/portfolio_pic.jpg';
import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaJava, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiFlask, SiR, SiVisualstudiocode, SiMicrosoftsqlserver, SiMicrosoftexcel, SiHeroku, SiGmail, SiLinkedin } from "react-icons/si";

function Portfolio() {
  return (
    <body>
      <div id="header">
        <a href="#intro" className="tabs" id="initials">JJ</a>
        <a href="#skills" className="tabs" id="skills_header">Skills</a>
        <a href="#projects" className="tabs" id="projects_header">Projects</a>
        <a href="#contact" className="tabs" id="contact_header">Contact</a>
      </div>
      <div id="intro">
        <img src={My_pic} alt="Me" id="My_pic"></img>
        <div id="intro_statement">
          <p>Hi! My name is <strong id="name">Jerry Jackson</strong> and I am a <strong>Software Developer</strong>!</p> 
          <p>I am passionate about the creativity in <strong>frontend</strong> development and the logical and critical thinking required for <strong>backend</strong> development.</p> 
          <p>Currently, I develop in-house software at <strong id="company">Allstate</strong>. I'm also a credentialed <strong>Actuary</strong>!</p>
        </div>
      </div>
      <div id="angled_color_intro"></div>
      <div id="skills">
        <h1>Skills</h1>
        <h2>Here are some skills, tools, and technologies that I use:</h2>
        <div>
          <FaJsSquare className="icons icons_skills_contact icons_skills" title="JavaScript"/>
          <FaReact className="icons icons_skills_contact icons_skills" title="ReactJS"/>
          <FaHtml5 className="icons icons_skills_contact icons_skills" title="HTML5"/>
          <FaCss3Alt className="icons icons_skills_contact icons_skills" title="CSS"/>
          <FaGitAlt className="icons icons_skills_contact icons_skills" title="Git"/>
          <FaGithub className="icons icons_skills_contact icons_skills" title="GitHub"/>
          <FaJava className="icons icons_skills_contact icons_skills" title="Java"/>
          <FaPython className="icons icons_skills_contact icons_skills" title="Python"/>
          <SiFlask className="icons icons_skills_contact icons_skills" title="Flask"/>
          <SiR className="icons icons_skills_contact icons_skills" title="R, R Shiny, R Markdown"/>
          <SiVisualstudiocode className="icons icons_skills_contact icons_skills" title="Visual Studio Code"/>
          <SiMicrosoftsqlserver className="icons icons_skills_contact icons_skills" title="SQL Server"/>
          <SiMicrosoftexcel className="icons icons_skills_contact icons_skills" title="Excel"/>
          <SiHeroku className="icons icons_skills_contact icons_skills" title="Heroku"/>
        </div>
      </div>
      <div id="angled_color_skills"></div>
      <div id="projects">
        <h1>Projects</h1>
        <div id="calc">
          <div id="calc_details">
            <div id="calc_github">
              <h2 id="calc_link">
                <a href="https://polar-anchorage-68644.herokuapp.com/" target="_blank" rel="noopener noreferrer" title="See Calculator">Calculator</a>
              </h2>
              <a href="https://github.com/jerrylj2/Calculator" target="_blank" rel="noopener noreferrer" id="calc_github_link">
                  <FaGithub className="icons icons_projects" title="GitHub"/>
              </a>
            </div>
            <div>
              <p><strong>A web app calculator developed using JavaScript and Flask!</strong></p>
            </div>
            <div>
              <FaJsSquare className="icons icons_projects" title="JavaScript"/>
              <FaHtml5 className="icons icons_projects" title="HTML5"/>
              <FaCss3Alt className="icons icons_projects" title="CSS"/>
              <SiFlask className="icons icons_projects" title="Flask"/>
              <SiHeroku className="icons icons_projects" title="Heroku"/>
            </div>
          </div>
          <div id="calc_pic_container">
            <img src={Calc_pic} alt="Calculator" id="Calc_pic"></img>
          </div>
        </div>
        <div id="portfolio">
          <div id="portfolio_pic_container">
            <img src={Portfolio_pic} alt="Portfolio" id="portfolio_pic"></img>
          </div>
          <div id="portfolio_details">
            <div id="portfolio_github">
              <h2 id="portfolio_link">
                <a href="#header" target="_blank" rel="noopener noreferrer" title="See Portfolio">Portfolio</a>
              </h2>
              <a href="https://github.com/jerrylj2" target="_blank" rel="noopener noreferrer" id="portfolio_github_link">
                  <FaGithub className="icons icons_projects" title="GitHub"/>
              </a>
            </div>
            <div>
            <p><strong>This portfolio which was developed using React!</strong></p>
            </div>
            <div>
              <FaReact className="icons icons_projects" title="ReactJS"/>
              <FaJsSquare className="icons icons_projects" title="JavaScript"/>
              <FaHtml5 className="icons icons_projects" title="HTML5"/>
              <FaCss3Alt className="icons icons_projects" title="CSS"/>
              <SiHeroku className="icons icons_projects" title="Heroku"/>
            </div>
          </div>
        </div>
      </div>
      <div id="angled_color_projects"></div>
      <div id="contact">
        <h1 id="contact_title">Contact</h1>
        <p id="contact_content"><strong>Feel free to reach out below!</strong></p>
        <div id="contact_icons">
          <a href="mailto:jerryljackson3@gmail.com">
            <SiGmail className="icons icons_skills_contact icons_contact" title="Gmail"/>
          </a>
          <span className="icon_spacing"></span>
          <a href="https://www.linkedin.com/in/jerry-jackson-acas-a508a5132/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin className="icons icons_skills_contact icons_contact" title="LinkedIn"/>
          </a>
          <span className="icon_spacing"></span>
          <a href="https://github.com/jerrylj2" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icons icons_skills_contact icons_contact" title="GitHub"/>
          </a>
        </div>
      </div>
      <footer>
        <p>© 2022 | designed & coded by Jerry Jackson</p>
      </footer>
    </body>
  );
}

export default Portfolio;