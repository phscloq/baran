import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col justify-center items-center   bg-slate-400 ">
      <div className=' bg-slate-600 sm:rounded-[2.5rem] sm:max-w-[41.5rem] sm:px-20  mt-12 h-screen w-full flex flex-col  text-center items-center p-4'>
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

          <ul className='flex flex-col items-center sm:min-w-full'>
            <li className='sm:min-w-full'>
              <div className=' bg-slate-500 h-56 w-96 sm:min-w-full rounded-2xl flex'>
                  <Image className='max-h-[224px] min-w-[384px]' src="/images/women-page.png" alt="Women Page Screenshot" width={384} height={221} />
                  <div className='flex justify-center '>
                    <Link href="https://github.com/phscloq"
                        target='_blank'>
                        <Image className='' src="/icons/github.svg" alt="GitHub" width={48} height={48} />
                    </Link>
                  </div>
                  
              </div>
            </li>
            
          </ul>
          <footer className=' text-center absolute bottom-0
          '>
            <p className='text-white select-all'>y.barandgn@gmail.com</p>
          </footer> 
      </div>

 </main>
  )
}
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