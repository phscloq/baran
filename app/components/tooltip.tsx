'use client'
import { useState } from "react"
export default function Tooltip({children, text}: {children: React.ReactNode, text: string}){

const [tooltipText, setTooltipText] = useState(text);

const handleCopyEmail = async ()=>{
    try{
        await navigator.clipboard.writeText('y.barandgn@gmail.com');
        setTooltipText('Copied!');

        setTimeout(()=> setTooltipText(text), 1000);

    }catch(error){
        console.error("Failed to copy email:", error);
            setTooltipText("Failed to copy!");
            setTimeout(() => setTooltipText(text), 1000);
    }
    
}

    return (
        <div className="relative group">
            <button className="border px-4 py-2 rounded-md"
            onClick={handleCopyEmail}>
                {children}
            </button>
            <div className={`absolute  bottom-11 ${tooltipText === 'Copied!' ? '-left-2' : '-left-[22px]'} bg-slate-800 text-white p-2  whitespace-nowrap opacity-0 group-hover:opacity-100 rounded-md transition-opacity duration-300`}>
                {tooltipText}
            </div>
        </div>
    )

}