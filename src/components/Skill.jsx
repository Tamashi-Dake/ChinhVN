import { FaGitAlt, FaNodeJs, FaTools } from "react-icons/fa";
import {
  // DiGoogleAnalytics,
  DiMongodb,
  DiMysql,
  // DiMysql,
  DiReact,
  // DiScrum,
} from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiPostman,
  SiSass,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { BsDatabase } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";

import "../scss/skill.scss";

const SkillSection = () => {
  const skills = [
    {
      name: "Frontend",
      icon: <CgWebsite className="skill-icon" />,
      items: [
        // { name: "HTML5", icon: <FaHtml5 className="skill-icon" /> },
        // { name: "CSS3", icon: <DiCss3 className="skill-icon" /> },
        { name: "Javascript", icon: <SiJavascript className="skill-icon" /> },
        { name: "Typescript", icon: <SiTypescript className="skill-icon" /> },
        { name: "ReactJS", icon: <DiReact className="skill-icon" /> },
        { name: "Next.js", icon: <TbBrandNextjs className="skill-icon" /> },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="skill-icon" />,
        },
        {
          name: "Sass",
          icon: <SiSass className="skill-icon" />,
        },
      ],
    },
    {
      name: "Backend",
      icon: <BsDatabase className="skill-icon" />,
      items: [
        { name: "Node.js", icon: <FaNodeJs className="skill-icon" /> },
        { name: "MongoDB", icon: <DiMongodb className="skill-icon" /> },
        { name: "Supabase", icon: <SiSupabase className="skill-icon" /> },
        { name: "MySQL", icon: <DiMysql className="skill-icon" /> },
      ],
    },
    {
      name: "Others",
      icon: <FaTools className="skill-icon" />,
      items: [
        { name: "Git", icon: <FaGitAlt className="skill-icon" /> },
        { name: "Figma", icon: <FiFigma className="skill-icon" /> },
        { name: "Postman", icon: <SiPostman className="skill-icon" /> },
        // { name: "Agile-Scrum", icon: <DiScrum className="skill-icon" /> },
        // {
        //   name: "Google Analytics",
        //   icon: <DiGoogleAnalytics className="skill-icon" />,
        // },
      ],
    },
  ];
  return (
    <section id="technology" className="skill ">
      <h2 className="section-title">Technology</h2>
      <div className="skill-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-group">
            <h3 className="skill-group-title">
              {skill.icon} {skill.name}
            </h3>
            <ul className="skill-list">
              {skill.items.map((item, index) => (
                <li key={index} className="skill-item" title={item.name}>
                  {item.icon} <p className="skill-name">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
