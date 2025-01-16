export default function Badge({children}: {children: React.ReactNode}){
        return (
            <span className="inline-block bg-slate-100 dark:bg-slate-600 border dark:border-slate-700  text-gray-800 dark:text-white text-xs 
            font-semibold rounded-full px-2 py-1 capitalize tracking-wide">
                {children}
            </span>
        )
    
    }