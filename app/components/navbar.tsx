import LightToggle from "./light-toggle";

export default function Navbar(){
    return (
        <nav className="w-full py-4">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl">Y. Baran Dogan</h1>
                <LightToggle />
            </div>
            
        </nav>
    )
}