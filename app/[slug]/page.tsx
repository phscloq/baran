'use client'
import { useEffect, useState } from "react"
import MainProjects from "../components/main-projects"
import { mainProjects } from "../data/projects"
import Container from "../components/container"
import Navbar from "../components/navbar"
import Badge from "../components/badge"
import Link from "next/link"
export default function ProjectPage({params}:{params:{projectTitle:string}}){
    const [project, setProject] = useState<any>(null)
    useEffect(()=>{
        const originalTitle = params.projectTitle.replace(/-/g, ' ')
        const project = mainProjects.find(
            (project) => project.title.toLowerCase() === originalTitle.toLowerCase()
        );
        setProject(project)
        console.log("Project", project)
        console.log("Params", params.projectTitle)
        console.log("MainProjects", MainProjects)

    },[params.projectTitle])

    if(project){
    
    return (
<main className="  min-h-screen bg-gradient-to-b  from-gray-50 to-gray-100
 dark:from-slate-900 dark:to-slate-800  text-slate-800 dark:text-white">
    <Container>
        <Navbar />
        <section className='py-8'>
            <div className='bg-white dark:bg-slate-700 p-8 rounded-[2.5rem] shadow-md '>
                <h1 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">{project.title}</h1>
                <div className="mb-8">
                    <img src={project.img} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech:string)=>(
                        <Badge key={tech}>{tech}</Badge>
                    ))}
                    </div>
                </div>
                <div className="flex justify-between mt-8">
                {project.demo && 
                <Link href={project.demo}>
                <button className="bg-slate-200 text-black px-3 py-1 rounded-md 
                hover:bg-slate-300  active:bg-slate-500 active:text-slate-100
                ">
                  Live
                </button>
              </Link>}

              {project.github && 
              <Link href={project.github}>
                <button className="bg-slate-200 text-black px-3 py-1 rounded-md 
                hover:bg-slate-300  active:bg-slate-500 active:text-slate-100
                ">
                  GitHub
                </button>
              </Link>}
                </div>
            </div>
        </section>
        <footer className="py-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            ← Back to Home
          </Link>
        </footer>
    </Container>
</main>  )
}

}