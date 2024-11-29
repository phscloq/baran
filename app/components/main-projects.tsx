import ProjectCard from "./project-card"

export default function MainProjects(){

    const projects = [
        {
            title: "Habits Warrior",
            alt:"Habits Warrior: A habit tracking app",
            img:"/images/ui-page.png",
            demo: "https://habitswarrior.com/",
            github:"https://github.com/phscloq/ui-library",
            technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
        },
        {
            title: "Baran UI",
            alt:"UI page screenshot",
            img:"/images/ui-page.png",
            demo:"https://ui-library-seven.vercel.app/",
            github:"https://github.com/phscloq/ui-library",
            technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
        },
        {
            title: "Shopping Cart",
            alt:"Shopping-cart website image",
            img:"/images/shopping-cart-women-page.png",
            demo:"https://shopping-site-rho.vercel.app/",
            github:"https://github.com/phscloq/shopping-site",
            technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
        },
       
    ]

    return (
        <section id="main-projects">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                {projects.map((project)=>(
                    <ProjectCard
                    big={false}
                    img={project.img}
                    title={project.title}
                    demo={project.demo}
                    github={project.github}
                    alt={project.alt}
                    key={project.title}
                    />
                ))}
            </div>
        </section>
    )

}