import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Tooltip from "./tooltip";

export default function ProfileInfo(){



    return (
        <div className='flex flex-col items-center mb-6 justify-center'>
            <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-r dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 from-blue-600 via-purple-600 to-pink-600">
                <div className=' rounded-full overflow-hidden w-full h-full '>
                    <img className=' rounded-full ' src="/images/baran.jpg" alt="Profile" width={144} height={144} />
                </div>
            </div>
            <div className='dark:text-white mt-4 flex  flex-col items-center gap-2 mb-4'>
                <h1 className='text-3xl  font-bold bg-clip-text from-purple-500 to-red-700 bg-gradient-to-r text-transparent '>Y. BARAN DOGAN</h1>
                <h3 className='text-xl  font-semibold leading-4'>Frontend Developer</h3>
            </div>
            <div className=' mt-4 flex items-center gap-2'>
                <Link href="https://github.com/phscloq"
                target='_blank'
                className="border p-2 rounded-md">
                    <Github className="h-6 w-6 "/>
                </Link>

                <Link href="https://www.linkedin.com/in/yusufbarandogan/"
                target='_blank'
                className="border p-2 rounded-md"
                >
                    <Linkedin className=" h-6 w-6" />
                </Link>

                <Link href="https://drive.google.com/file/d/1yccW_UpiUtBFiTFO_VauYG5FJbw3-IlE/view?usp=sharing"
                target="_blank" 
                className=" border px-4 py-2 rounded-md">
                    View CV 
                </Link>

                <Tooltip text="Copy Email">   
                    <Mail className="h-6 w-6" />
                </Tooltip>

            </div>
        </div>
    )
}