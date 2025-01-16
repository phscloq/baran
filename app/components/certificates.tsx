import Link from "next/link";
import Badge from "./badge";
import { title } from "process";

export default function Certificates(){
    const certificates = [
    {
        title: 'React Frontend Developer',
        issuedBy: 'HackerRank',
        href: 'https://drive.google.com/file/d/11WundLWJuH604sF1-fmy3xg60BvvL2RU/view?usp=sharing',
    },
    {
        title: 'Advanced React',
        issuedBy: 'Meta',
        href: 'https://drive.google.com/file/d/1F1SOEP56J4o7TXlUcjoAdyx3-6k03qVU/view?usp=sharing',
    },
    {
        title: 'Intermediate Python',
        issuedBy: 'DataCamp',
        href: 'https://drive.google.com/file/d/1Q6D1LY_JwUixJFiQwSml6jV6oRYYRiRc/view?usp=sharing',
    },
    {
        title: 'Intro to Machine Learning',
        issuedBy: 'Kaggle',
        href: 'https://drive.google.com/file/d/1P-UOMCsId6ujR5hBhVap1crKeIJmvbnM/view?usp=sharing',
    },
    {
        title: 'Intro to Deep Learning',
        issuedBy: 'Kaggle',
        href: 'https://drive.google.com/file/d/1m--Oy8-u2IE8Tt6pbaJ1HvQDfaEYs_OI/view?usp=sharing',
    },
    {
        title: 'Data Manipulation with Pandas',
        issuedBy: 'DataCamp',
        href: 'https://drive.google.com/file/d/1zvfmqMsGFIV2zaV_U0iO6_ZqfBrMBxCt/view?usp=sharing',
    },
    {
        title: 'Intro to Data Visualization with Matplotlib',
        issuedBy: 'DataCamp',
        href: 'https://drive.google.com/file/d/1zSfKCVcufuLvM66ySK899HkdoUC9KrVY/view?usp=sharing',
    },
    {
        title: 'Intro to Data Visualization with Seaborn',
        issuedBy: 'DataCamp',
        href: 'https://drive.google.com/file/d/1xqLiZUQ0D8VnFvl_qtP9wiaG_OoiA5hs/view?usp=sharing',
    },
    ];


    return (
        <section id="education" className="mt-10 space-y-4">
            <h2 className="text-2xl font-bold ">Certificates</h2>
            <div className="flex flex-wrap gap-2">
            {certificates.map((certificate, index) => (
                <Link 
                    href={certificate.href}  
                    key={index}
                    target="_blank"
                    className="inline-block bg-slate-100 dark:bg-slate-600 border dark:border-slate-700   text-gray-800 dark:text-white text-xs 
                    font-semibold rounded-full px-2 py-1 capitalize tracking-wide hover:scale-105 hover:shadow-md transition-all duration-300 break-all"
                >
                    <span>{certificate.title}</span>
                    <span className="ml-1">({certificate.issuedBy})</span>
                </Link >
            ))}
            </div>
        </section>
    )
}