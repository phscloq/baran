import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className=" min-h-screen flex justify-center items-center p-24">
     <div className=' w-80 flex flex-col  text-center'>
        <Link 
          className='hover:font-semibold  hover:bg-gray-300
            bg-gray-200 p-4 rounded-md shadow-md
            mb-4
            '
          href="https://shopping-site-rho.vercel.app/"
          target='_blank'
          >
          <p className='text-black  '>Shopping Cart</p>
        </Link>
   {/*      https://ui-library-seven.vercel.app/
  */}    
        <Link 
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
        </Link>
     </div>
     
 </main>
  )
}
