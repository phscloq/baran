export default function Skills(){
    const techStack = [
        { category: "Frontend", technologies: ["Typescript", "React", "Next.js"] },
        { category: "Backend", technologies: ["Node.js", "Express"] },
        { category: "Tools", technologies: ["Git"] },
    ]

    return (
        <div>
            {techStack.map(({ category, technologies }) => (
                <div key={category}>
                    <h1>{category}</h1>
                    {technologies.map((title)=>{
                        return(
                            <h3 key={title}>{title}</h3>
                        )
                    })}
                </div>
            ))}
        </div>

    )
}