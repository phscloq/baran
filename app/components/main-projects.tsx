import ProjectCard from "./project-card"

export default function MainProjects(){

    const projects = [
        {
            title: "Habits Warrior",
            alt:"Habits Warrior: A habit tracking app",
            description: "A habit tracking app that helps you build good habits and break bad ones.",
            img:"/images/ui-page.png",
            demo: "https://habitswarrior.com/",
            technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
        },
        {
            title: "Baran UI",
            alt:"UI page screenshot",
            description: "A collection of reusable UI components for rapid web development.",
            img:"/images/ui-page.png",
            demo:"https://ui-library-seven.vercel.app/",
            github:"https://github.com/phscloq/ui-library",
            technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
        },
        {
            title: "Shopping Cart",
            alt:"Shopping-cart website image",
            description: "An e-commerce platform showcasing advanced shopping cart functionality. Demonstrates proficiency in state management and creating intuitive user interfaces.",
            img:"/images/shopping-cart-women-page.png",
            demo:"https://shopping-site-rho.vercel.app/",
            github:"https://github.com/phscloq/shopping-site",
            technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
        },
       
    ]

    return (
        <section id="main-projects" className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
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
                    techStack={project.technologies}
                    description={project.description}
                    />
                ))}
            </div>
        </section>
    )

}