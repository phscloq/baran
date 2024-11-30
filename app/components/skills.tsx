import Badge from "./badge"

export default function Skills(){
    const techStack = [
        { category: "Frontend", technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vite"] },
        { category: "Backend", technologies: ["Node.js", "Express", "Supabase", "MongoDB", "Firebase"] },
        { category: "Tools", technologies: ["Git", "GitHub", "Figma", "Responsive Design"] },
    ]

    return (
        <section id="skills">
            <h2 className="text-2xl font-bold mb-8">Skills</h2>
            <div className=" space-y-4">
                {techStack.map(({ category, technologies }) => (
                    <div key={category} className="mb-4">
                        <h1>{category}</h1>
                        <div className="flex gap-2 mt-2">
                        {technologies.map((title)=>{
                            return(
                                <Badge key={title}>{title}</Badge>
                            )
                        })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}