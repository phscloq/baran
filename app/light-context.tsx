'use client';
import { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
    theme: string | null;
    toggleTheme: () => void;
};
type ThemeContextProviderProps = {
    children: React.ReactNode;
    value?: string;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: '',
    toggleTheme: () => {},
});

export function ThemeProvider({children}:ThemeContextProviderProps){
    const [theme, setTheme] = useState<string | null>(null); // Default to null to avoid SSR mismatches

    useEffect(()=>{
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
        
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    
    }, []);


    const toggleTheme = () => {
        console.log('toggling theme');
        const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'; // Get current theme
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);    
    };
    
   

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext);
}
