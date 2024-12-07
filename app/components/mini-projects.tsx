import ProjectCard from "./project-card"

export default function MiniProjects(){

    const projects = [
        {
            title: "Guess the Color!",
            description: "An HEX color guessing game",
            alt:"Guess the Color! An HEX color guessing game",
            img: "/images/guess-the-color.png",
            demo: "https://phscloq.github.io/guess-the-color/",
            github:"https://github.com/phscloq/guess-the-color",
            technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
        },
        {
            title: "Search Flight",
            description: "Interactive flight search application with advanced filtering and sorting capabilities.",
            alt:"A flight search web app based on mock data",
            img:"/images/shopping-cart-women-page.png",
            demo:"https://flight-search-app-bay.vercel.app",
            github:"https://github.com/phscloq/flight-search-app",
            technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
        },
        {
            title: "Election Observer",
            description: "Mobile app for election observers to document and report election processes.",
            alt:"A mobile app to help observersin elections",
            img:"/images/ui-page.png",
            github:"https://github.com/phscloq/secim-app",
            technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
        },
        {
            title: "CSS Challanges",
            description: "Collection of advanced CSS implementations showcasing frontend expertise.",
            alt:"A repo of the CSS challanges I've done",
            img:"/images/ui-page.png",
            demo:"https://challenges-inky.vercel.app",
            github:"https://github.com/phscloq/challenges",
            technologies: ["NextJs", "React", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "Git", "GitHub"],
        },

    ]
    return (
        <section id="mini-projects" className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
            <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
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