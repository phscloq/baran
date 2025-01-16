import ProjectCard from "./project-card"
import { projectsData } from "../data/projects"
export default function MainProjects(){

    const projects = Object.values(projectsData).slice(0, 3)

    return (
        <section id="main-projects" className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold ">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-4">
                {projects.map((project)=>(
                    <ProjectCard
                    big={false}
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