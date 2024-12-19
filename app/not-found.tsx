'use client'
import Link from "next/link";
import Navbar from "./components/navbar";
import { useState } from "react";

export default function NotFound() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const handleClick = ()=>{
    let count = clickCount;
    count++;
    setClickCount(count)
    if(count === 4){
      setShowEasterEgg(true)
      setClickCount(0)
    }
  }

    return (
        <div className=" bg-gradient-to-b  from-gray-50 to-gray-100
          dark:from-slate-900 dark:to-slate-800  text-slate-800 dark:text-white min-h-screen flex flex-col ">
          <div className="container max-w-4xl mx-auto sm:px-6 lg:px-8 flex flex-col flex-grow ">
            <header className="px-4">
              <Navbar />
            </header>
            <main className="flex flex-col items-center  justify-center flex-grow text-center p-3">
              <h1 className="text-6xl font-bold mb-4">4😮4</h1>
              <p className="text-xl mb-8">Oops! Looks like this page took a philosophical detour.</p>
              <button 
              className="transform transition-transform duration-200 hover:scale-110 mb-8"
              onClick={() => handleClick()}
              >
                <span className="text-9xl" role="img" aria-label="Thinking face emoji">
                  🤔
                </span>
              </button>
              {showEasterEgg && (
                <div className="mb-8 text-center bg-yellow-200 p-4 rounded-lg dark:bg-yellow-800">
                  <p className="text-lg font-semibold">Easter Egg Found!</p>
                  <p>You've discovered my hidden talent: I can also debug existential crises!</p>
                </div>
                )}
                <p className="text-lg mb-4">
                  While you're here, why not check out my 
                  <span className="font-semibold text-blue-600 dark:text-blue-400"> 100% bug-free </span>
                  projects?
                </p>
              <div className="space-y-4 text-white">
                  <Link href="/" className=" block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-200 ">
                    Return to Homepage
                  </Link>
                  <a 
                    href="https://github.com/phscloq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-6 py-3 bg-gray-500 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                  >
                    Check Out My GitHub
                  </a>
                </div>
            </main>

            <footer className=" p-4 flex space-x-1 items-center justify-center text-center">
                <p>
                  <span className="font-semibold">Pro tip:</span> If you're lost in code or philosophy,
                  <a href="mailto:y.barandgn@gmail.com" className="text-blue-600 dark:text-blue-400"> email me</a>
                  . I excel at both!
                </p>
              </footer>
          </div>
        </div>
      )
}


