export default function Container({children}: {children: React.ReactNode}){
    return (
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}