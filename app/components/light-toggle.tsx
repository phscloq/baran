'use client'

import { useTheme } from "@/app/light-context";
import { Sun, Moon } from "lucide-react";
export default function LightToggle(){
    const {theme, toggleTheme} = useTheme();
    

    return (
        <button 
        className=" bg-white text-black dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 dark:bg-slate-700 dark:text-white 
        border  rounded-md  p-2 text-4xl  dark:border-0 h-[42px] w-[42px]
        transition-colors duration-300 ease-in-out"
        onClick={() => toggleTheme()}
        >
            <Sun className="h-6 w-6 hidden dark:block" />
            <Moon className="h-6 w-6 block dark:hidden" />
            
            
        </button>
    )
}