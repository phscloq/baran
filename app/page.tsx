import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from './components/project-card'
import Skills from './components/skills'

//import OpenToWork from './components/open-to-work'
export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col justify-center items-center  bg-slate-400 sm:pt-8">
       
       <div className='hidden sm:block'>
          <h1 className=' sm:text-3xl text-5xl font-bold text-slate-800'>
            Philosopher Turned Frontend Enchanter
          </h1>
        </div>

      <div className='relative bg-slate-600 sm:rounded-[2.5rem] sm:max-w-[41.5rem] 
      sm:px-20  
      sm:mt-12  w-full flex flex-col  text-center items-center p-4 shadow-md
       shadow-slate-600'>
          <div className='sm:hidden mb-4'>
          <h1 className=' text-2xl font-bold text-slate-900'>
            Philosopher Turned Frontend Enchanter
          </h1>
        </div>
            <div className='flex flex-col items-center mb-6'>
                <div className='relative  w-[144px] h-[144px] rounded-full overflow-hidden'>
                  <Image className=' rounded-full max-w-full' src="/images/baran.jpg" alt="Profile" width={144} height={144} />
                </div>
                <div className='text-white mt-6'>
                  <h1 className='text-4xl  font-bold'>Y. BARAN DOGAN</h1>
                  <h3 className='text-xl  font-semibold leading-4'>Frontend Developer</h3>
                </div>
                <div className=' mt-4 flex bg-slate-400  w-[250px] self-center rounded-3xl justify-evenly items-center'>
                    <Link href="https://github.com/phscloq"
                      target='_blank'>
                      <Image className='' src="/icons/github.svg" alt="GitHub" width={40} height={40} />
                    </Link>

                    <Link href="https://www.linkedin.com/in/yusufbarandogan/"
                    target='_blank'>
                      <Image className='' src="/icons/linkedin.svg" alt="Linkedin" width={40} height={40} />
                    </Link>

                    <Link href="https://drive.google.com/file/d/1yccW_UpiUtBFiTFO_VauYG5FJbw3-IlE/view?usp=sharing"
                      target="_blank" 
                      className="text-black text-3xl font-bold">
                        CV 
                    </Link>
                </div>
            </div>

            <ul className='grid grid-cols-3  gap-8 sm:min-w-full mb-16'>
              

              <li className=' col-span-3'>
              <div className=' text-left'>
                <h2 className='text-2xl font-bold text-white'>Technology Stack</h2>
              </div>
                <Skills />
              </li>

              <li className=' col-span-3'>
              <div className=' text-left mb-1'>
                <h2 className='text-2xl font-bold text-white'>Projects</h2>
              </div>
              <ProjectCard
                img="/images/shopping-cart-women-page.png"
                title="Shopping Cart"
                demo="https://shopping-site-rho.vercel.app/"
                github="https://github.com/phscloq/shopping-site"
              />
              </li>
              <li className=' col-span-3'>
              <ProjectCard
                img="/images/ui-page.png"
                title="Baran UI"
                demo="https://ui-library-seven.vercel.app/"
                github="https://github.com/phscloq/ui-library"
              />
              </li>
            </ul>
            <footer className='text-white h-36  w-full gap-2 sm:hidden flex justify-center items-center
            '>
              <p className='  font-extrabold '>Email: </p>
              <p className=' font-bold select-all'>y.barandgn@gmail.com</p>
      </footer> 
      </div>
      <footer className='hidden h-36  gap-2 sm:flex justify-center items-center
            '>
              <p className='text-slate-700  font-extrabold '>Email: </p>
              <p className='text-slate-700 font-bold select-all'>y.barandgn@gmail.com</p>
      </footer> 
 </main>
  )
}
