'use client'

import { useTheme } from "@/app/light-context";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
export default function LightToggle(){
    const {theme, toggleTheme} = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Set mounted to true after component mounts
    }, []);
    
    if (!isMounted) {
        return (
            <button 
        className=" bg-white text-black dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 
        border  rounded-md  p-2 text-4xl  dark:border-0  h-[42px] w-[42px]
        transition-colors duration-300 ease-in-out"
        onClick={() => toggleTheme()}
        ></button>
        )
      }

    return (
        <button 
        className=" bg-white text-black dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 
        border  rounded-md  p-2 text-4xl  dark:border-0 h-[42px] w-[42px]
        transition-colors duration-300 ease-in-out"
        onClick={() => toggleTheme()}
        >
            {theme === 'dark' ? <Sun className="h-6 w-6" />
            : <Moon className="h-6 w-6"/>}
            
            
        </button>
    )
}