import ProjectCard from './components/project-card'
import Skills from './components/skills'
import Navbar from './components/navbar'
import Container from './components/container'
import Footer from './components/footer'
import ProfileInfo from './components/profile'
import MainProjects from './components/main-projects'
import MiniProjects from './components/mini-projects'
import Education from './components/education'
//import OpenToWork from './components/open-to-work'
export default function Home() {
  return (
<main className="  min-h-screen bg-gradient-to-b  from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800  text-slate-800 dark:text-white">
  <Container>
    <Navbar />
    <section className='py-8'>
      <div className='bg-white dark:bg-slate-700 p-8 rounded-[2.5rem] shadow-md '>
        <ProfileInfo />
        <Skills />
        <Education />
        <MainProjects />
        <MiniProjects />
            
              
      </div>
    </section>
    <Footer />
  </Container>
 </main>
  )
}
