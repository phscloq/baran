import Link from "next/link";
import Image from "next/image";
import Badge from "./badge";
type ProjectCardProps = {
    img: string;
    title: string;
    demo?: string;
    github?: string;
    alt:string;
    big: boolean;
    techStack: string[];
    description: string;
    }

export default function ProjectCard({img, title, demo, github, alt,big, techStack, description}: ProjectCardProps){
    return (
     
      <div className="bg-white  dark:bg-slate-600 border dark:border-slate-700 rounded-md overflow-hidden hover:-translate-y-1 transition-transform duration-300">
        <div className="relative">
          <div className=" min-h-36">
            <img src={img} alt={alt} />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 text-white font-bold text-lg">
            {demo && 
          <Link href={demo}>
          View Project
        </Link>        
          }
          {!demo && github &&
          <Link href={github}>
          View Repo
        </Link>
          }
          </div>
        </div>
        {/* Card content */}
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2
            text-gray-800 dark:text-white">
                {title}
            </h3>
            <p className=" text-gray-600 dark:text-slate-300">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {techStack.map((tech)=>(
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
        </div>
        {/* Card footer */}
        <div className="flex justify-between p-4 pt-0">
              {demo && 
              <Link href={demo}>
                <button className="bg-slate-200 text-black px-3 py-1 rounded-md 
                hover:bg-slate-300  active:bg-slate-500 active:text-slate-100
                ">
                  Live
                </button>
              </Link>}

              {github && 
              <Link href={github}>
                <button className="bg-slate-200 text-black px-3 py-1 rounded-md 
                hover:bg-slate-300  active:bg-slate-500 active:text-slate-100
                ">
                  GitHub
                </button>
              </Link>}
        </div>
      </div>

      )
    
         
}

//hover css for the card
//hover:border hover:border-black hover:cursor-pointer hover:shadow-none 