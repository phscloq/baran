'use client'
import { useEffect, useState } from "react"
import { projectsData } from "../../data/projects"
import Container from "../../components/container"
import Navbar from "../../components/navbar"
import Badge from "../../components/badge"
import Link from "next/link"
export default function ProjectPage({params}:{params:{slug:string}}){
    const [project, setProject] = useState<any>(null)
    useEffect(()=>{
      setProject(projectsData[params.slug as keyof typeof projectsData])
    },[params.slug])

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
                    <img src={project.image} alt={project.title} className="w-full dark:hidden  object-fill  rounded-lg" />
                    {project.darkThemedImage ?
                     <img src={project.darkThemedImage} alt={project.title} className="w-full hidden dark:block dark:opacity-100  object-fill  rounded-lg" />:
                     <img src={project.image} alt={project.title} className="w-full hidden dark:block dark:opacity-100  object-fill  rounded-lg" />}
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
                    <p className="text-gray-600 dark:text-gray-300">{project.fullDescription}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech:string)=>(
                        <Badge key={tech}>{tech}</Badge>
                    ))}
                    </div>
                </div>
                
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Features</h2>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                        {project.features.map((feature:string)=>(
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Challenges</h2>
                    <p>{project.challenges}</p>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Future Improvements</h2>
                  <p>{project.futureImprovements}</p>
                </div> 

                {/* Model for future use
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Section Title</h2>
                </div> */}

                {/* Links for demo and github */}
                <div className="flex justify-between mt-8">
                  {project.liveUrl && 
                  <Link href={project.liveUrl} target="_blank">
                    <button className="bg-slate-200 text-black px-3 py-1 rounded-md 
                    hover:bg-slate-300  active:bg-slate-500 active:text-slate-100
                    ">
                      Live
                    </button>
                  </Link>}

                  {project.githubUrl && 
                  <Link href={project.githubUrl} target="_blank">
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