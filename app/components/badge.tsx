export default function Badge({children}: {children: React.ReactNode}){
        return (
            <span className="inline-block border dark:border-slate-800  dark:bg-slate-700 text-gray-800 dark:text-white text-xs 
            font-semibold rounded-full px-2 py-1 capitalize tracking-wide">
                {children}
            </span>
        )
    
    }