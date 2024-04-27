import { AiOutlineGlobal } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { DiJava, DiMongodb, DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSqlite, SiTailwindcss } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

import { useMediaQuery } from "@uidotdev/usehooks";
import "../scss/project.scss";
const ProjectSection = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 500px)");

  const projects = [
    {
      projectName: "Smuss 🎵",
      projectDescription:
        "A music streaming service that allows users to listen to their favorite songs, manages playlists, and experience Premium options. Smuss is a platform that provides a wide range of music genres and artists.",
      technologies: [
        <>
          <DiReact className="technology-icon" /> ReactJS
        </>,
        <>
          <TbBrandNextjs className="technology-icon" /> NextJS
        </>,
        <>
          <SiTailwindcss className="technology-icon" /> TailwindCSS
        </>,
        <>
          <RiSupabaseFill className="technology-icon" /> Supabase
        </>,
      ],
      livePreviewLink: "https://smuss-beta.vercel.app/",
      sourceCodeLink: "https://github.com/Tamashi-Dake/smuss-beta",
      imageSrc: isSmallDevice
        ? "/images/smuss-mobile.png"
        : "/images/smuss.png",
    },
    {
      projectName: "Todenu ⏳",
      projectDescription:
        "With a focus on simplicity and clean design, this timed task manager prioritizes user experience, making it easy for users to stay focused and productive.",
      technologies: [
        <>
          <DiReact className="technology-icon" /> ReactJS
        </>,
        <>
          <TbBrandNextjs className="technology-icon" /> NextJS
        </>,
        <>
          <SiTailwindcss className="technology-icon" /> TailwindCSS
        </>,
        <>
          <DiMongodb className="technology-icon" /> MongoDB
        </>,
      ],
      livePreviewLink: "https://code-menu.vercel.app/",
      sourceCodeLink: "https://github.com/Tamashi-Dake/todenu",
      imageSrc: isSmallDevice
        ? "/images/todenu-mobile.png"
        : "/images/todenu.png",
    },
    {
      projectName: "Muss",
      projectDescription:
        "Muss is an Android music streaming app that allows users to enjoy their favorite songs on-the-go. With a user-friendly interface and a vast music library, users can explore various genres and artists. ",
      technologies: [
        <>
          <DiJava className="technology-icon" /> Java
        </>,
        <>
          <SiSqlite className="technology-icon" /> SQLite
        </>,
      ],
      livePreviewLink: "",
      sourceCodeLink:
        "https://github.com/Tamashi-Dake/Music_Streaming_Services_Android",
      imageSrc: "/images/Muss-mobile.png",
    },
  ];
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <div
            className={isSmallDevice ? " project-img-mobile" : "project-img"}
          >
            <img src={project.imageSrc} alt="Project" />
          </div>
          <div className="project-info">
            <div className="project-title-wapper">
              <h3 className="project-name">
                <a
                  href={
                    project.livePreviewLink === ""
                      ? project.sourceCodeLink
                      : project.livePreviewLink
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.projectName}
                </a>
              </h3>
              <div className="project-links">
                {project.livePreviewLink === "" ? null : (
                  <a href={project.livePreviewLink} className="project-link">
                    <AiOutlineGlobal
                      className="project-link-icon"
                      title="Live Preview"
                    />
                  </a>
                )}
                <a href={project.sourceCodeLink} className="project-link">
                  <BsGithub className="project-link-icon" title="Source Code" />
                </a>
              </div>
            </div>
            <p className="project-descrition">{project.projectDescription}</p>
            <div className="project-technologies">
              {project.technologies.map((technology, index) => (
                <span className="technology" key={index}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectSection;
