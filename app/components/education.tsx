import { MapPin } from "lucide-react";

export default function Education(){
    const education = [
        {
            school: "Mimar Sinan Fine Arts University",
            degree: "Master of Arts in Philosophy",
            year: "2021 - 2024",
            location: "Istanbul, Turkey"
        },
        {
            school: "University of Adam Mickiewicz",
            degree: "Erasmus Exchange Program",
            year: "2016 - 2017",
            location: "Poznań, Poland"
        },
        {
            school: "Anadolu University",
            degree: "Bachelor of Arts in Philosophy",
            year: "2015 - 2021",
            location: "Eskisehir, Turkey"
        }
    ];

    return (
        <section id="education" className="mt-16">
            <div className="space-y-4">
                <h2 className="text-2xl font-bold ">Education</h2>
                {education.map(({ school, degree, year, location }) => (
                    <div key={school} className="mb-4 bg-slate-100 dark:bg-slate-600 py-4 px-3 rounded-md">
                        <h1 className="font-bold">{degree}</h1>
                        <div className="flex justify-between">
                            <h2>{school}</h2>
                            <h3>{year}</h3>
                        </div>
                       <div className="flex gap-2 items-center mt-1">
                        <MapPin className="h-5 w-5" />
                        <h3>{location}</h3>
                       </div>
                    </div>
                ))}
            </div>
        </section>
    )
}