import ProjectCard from "./project-card"
import { projectsData } from "../data/projects"
export default function MiniProjects(){
    const projects = Object.values(projectsData).slice(3, )

    return (
        <section id="mini-projects" className="mt-16 space-y-4">
            <h2 className="text-2xl font-bold ">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                {projects.map((project)=>(
                    <ProjectCard
                    big={true}
                    img={project.image}
                    darkThemedImage={project.darkThemedImage}
                    title={project.title}
                    demo={project.liveUrl}
                    github={project.githubUrl}
                    alt={project.description}
                    key={project.title}
                    techStack={project.techStack}
                    description={project.description}
                    />
                ))}
            </div>
        </section>
    )

}