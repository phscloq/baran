import LightToggle from "./light-toggle";

export default function Navbar(){
    return (
        <nav className="w-full">
            <div className="flex items-center justify-between">
                <h1>Y. Baran Dogan</h1>
                <LightToggle />
            </div>
            
        </nav>
    )
}