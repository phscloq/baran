import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from './components/project-card'
import Skills from './components/skills'
export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col justify-center items-center  bg-slate-400">
      <div className=' bg-slate-600 sm:rounded-[2.5rem] sm:max-w-[41.5rem] sm:px-20  
      mt-12  w-full flex flex-col  text-center items-center p-4 shadow-md shadow-slate-600'>
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
                      <Image className='' src="/icons/github.svg" alt="GitHub" width={24} height={24} />
                    </Link>

                    <Link href="https://www.linkedin.com/in/yusufbarandogan/"
                    target='_blank'>
                      <Image className='' src="/icons/linkedin.svg" alt="Linkedin" width={24} height={24} />
                    </Link>

                    <Link href="https://drive.google.com/file/d/1yccW_UpiUtBFiTFO_VauYG5FJbw3-IlE/view?usp=sharing"
                      target="_blank" 
                      className=" text-lg font-bold">
                        CV 
                    </Link>
                </div>
            </div>

          <ul className='grid grid-cols-3  gap-8 sm:min-w-full mb-16'>
            <li className=' col-span-3'>
              <Skills />
            </li>
            <li className=' col-span-3'>
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
           
      </div>
      <footer className=' h-36  gap-2 flex justify-center items-center
            '>
              <p className='text-slate-700  font-extrabold '>Email: </p>
              <p className='text-slate-700 font-bold select-all'>y.barandgn@gmail.com</p>
      </footer> 
 </main>
  )
}
{/*  */}
{/* <Link 
className='hover:font-semibold  hover:bg-gray-300
  bg-gray-200 p-4 rounded-md shadow-md
  mb-4
  '
href="https://shopping-site-rho.vercel.app/"
target='_blank'
>
<p className='text-black  '>Shopping Cart</p>
</Link> */}
{/*      https://ui-library-seven.vercel.app/
*/}    
{/* <Link 
className='hover:font-semibold 
bg-gray-200 p-4 rounded-md shadow-md
 hover:bg-gray-300 mb-4'
href="https://ui-library-seven.vercel.app/"
target='_blank'
>
  <p className='text-black  '>Personal UI Library</p>
</Link>
<Link 
className='hover:font-semibold 
bg-gray-200 p-4 rounded-md shadow-md
 hover:bg-gray-300 mb-4'
href="https://drive.google.com/file/d/1qHX47oVbSI0gvj4YCDGzW7jguRHmxKN8/view?usp=sharing"
target='_blank'
>
  <p className='text-black  '>Resume</p>
</Link>
<Link 
className='hover:font-semibold 
bg-gray-200 p-4 rounded-md shadow-md
 hover:bg-gray-300 mb-4'
href="https://github.com/phscloq"
target='_blank'
>
  <p className='text-black  '>GitHub</p>
</Link> */}