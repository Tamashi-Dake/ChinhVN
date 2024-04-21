import { AiOutlineGlobal } from "react-icons/ai";
import "../scss/project.scss";
import { BsGithub } from "react-icons/bs";
const ProjectSection = () => {
  const projects = [
    {
      projectName: "Smuss 🎵",
      projectDescription:
        "A music streaming service that allows users to listen to their favorite songs, manages playlists, and experience Premium options. Smuss is a platform that provides a wide range of music genres and artists.",
      technologies: ["ReactJS", "NextJS", "TailwindCSS", "Supabase"],
      livePreviewLink: "https://smuss-beta.vercel.app/",
      sourceCodeLink: "https://github.com/Tamashi-Dake/smuss-beta",
      imageSrc: "https://i.imgur.com/L1MkDtH.png",
    },
    {
      projectName: "Todenu ⏳",
      projectDescription:
        "With a focus on simplicity and clean design, this timed task manager prioritizes user experience, making it easy for users to stay focused and productive.",
      technologies: ["ReactJS", "NextJS", "TailwindCSS", "MongoDB"],
      livePreviewLink: "https://code-menu.vercel.app/",
      sourceCodeLink: "https://github.com/Tamashi-Dake/todenu",
      imageSrc: "https://i.imgur.com/eLfon6k.png",
    },
    {
      projectName: "Muss",
      projectDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero.",
      technologies: ["Java", "SQLite"],
      livePreviewLink: "",
      sourceCodeLink:
        "https://github.com/Tamashi-Dake/Music_Streaming_Services_Android",
      imageSrc: "https://i.imgur.com/L1MkDtH.png",
    },
  ];
  return (
    <section id="projects" className="projects">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="project-img">
            <img src={project.imageSrc} alt="Project" />
          </div>
          <div className="project-info">
            <div className="project-title-wapper">
              <h3 className="project-name">{project.projectName}</h3>
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
