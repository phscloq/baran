import Link from "next/link";

export default function ProfileInfo(){
    return (
        <div className='flex flex-col items-center mb-6'>
            <div className='relative  w-[144px] h-[144px] rounded-full overflow-hidden'>
                <img className=' rounded-full max-w-full' src="/images/baran.jpg" alt="Profile" width={144} height={144} />
            </div>
            <div className='text-white mt-6'>
                <h1 className='text-4xl  font-bold'>Y. BARAN DOGAN</h1>
                <h3 className='text-xl  font-semibold leading-4'>Frontend Developer</h3>
            </div>
            <div className=' mt-4 flex bg-slate-400  w-[250px] self-center rounded-3xl justify-evenly items-center'>
                <Link href="https://github.com/phscloq"
                target='_blank'>
                    <img className='' src="/icons/github.svg" alt="GitHub" width={40} height={40} />
                </Link>

                <Link href="https://www.linkedin.com/in/yusufbarandogan/"
                target='_blank'>
                    <img className='' src="/icons/linkedin.svg" alt="Linkedin" width={40} height={40} />
                </Link>

                <Link href="https://drive.google.com/file/d/1yccW_UpiUtBFiTFO_VauYG5FJbw3-IlE/view?usp=sharing"
                target="_blank" 
                className="text-black text-3xl font-bold">
                    View CV 
                </Link>
            </div>
        </div>
    )
}