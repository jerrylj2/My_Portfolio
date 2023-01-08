import './portfolio.css';
import Intro from './components/Intro.tsx';
import Skills from './components/Skills.tsx';
import CalculatorProject from './components/CalculatorProject.tsx';
import PortfolioProject from './components/PortfolioProject.tsx';
import Contact from './components/Contact.tsx'
import StatQuizProject from './components/StatQuizProject.tsx';

function Portfolio() {
  return (
    <body>
      <div id="header">
        <a href="#intro" className="tabs" id="initials">JJ</a>
        <a href="#skills" className="tabs" id="skills_header">Skills</a>
        <a href="#projects" className="tabs" id="projects_header">Projects</a>
        <a href="#contact" className="tabs" id="contact_header">Contact</a>
      </div>
      <Intro />
      <div id="angled_color_intro"></div>
      <Skills />
      <div id="angled_color_skills"></div>
      <div id="projects">
        <h1>Projects</h1>
        <StatQuizProject direction="left"/>
        <CalculatorProject direction="right"/>
        <PortfolioProject direction="left"/>
      </div>
      <div id="angled_color_projects"></div>
      <Contact />
      <footer>
        <p>© 2023 | designed & coded by Jerry Jackson</p>
      </footer>
    </body>
  );
}

export default Portfolio;