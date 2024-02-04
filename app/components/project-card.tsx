import Link from "next/link";
import Image from "next/image";
type ProjectCardProps = {
    img: string;
    title: string;
    demo: string;
    github: string;
    }

export default function ProjectCard({img, title, demo, github}: ProjectCardProps){
    return (
       
        <div className=' relative bg-slate-500  min-h-72 w-96 sm:min-w-full rounded-2xl overflow-hidden   shadow-lg  shadow-slate-900 flex'>
            
            <div className='absolute top-0 left-0 w-full '>
              <Image className=' min-w-[384px] w-full min-h-72' 
              src={img} alt="Women Page Screenshot" 
              width={384} height={221} />
            </div>

            <div className='flex items-end px-4 pb-1  justify-between z-10 w-full'>
              <Link href={demo} target='_blank'>
                <p className='hover:underline font-extrabold'>{title}</p>
              </Link>

              <Link href={github}
                  target='_blank'>
                  <Image className='' src="/icons/github.svg" alt="GitHub" width={48} height={48} />
              </Link>
            </div>
        </div>
    )
}

//hover css for the card
//hover:border hover:border-black hover:cursor-pointer hover:shadow-none 