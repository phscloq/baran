import ProjectCard from './components/project-card'
import Skills from './components/skills'
import Navbar from './components/navbar'
import Container from './components/container'
import Footer from './components/footer'
import ProfileInfo from './components/profile'
import MainProjects from './components/main-projects'
//import OpenToWork from './components/open-to-work'
export default function Home() {
  return (
<main className="  min-h-screen bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white">
  <Container>
    <Navbar />
    <section className='py-8'>
      <div className='bg-white dark:bg-slate-700 p-8  rounded-[2.5rem] shadow-md '>
        <ProfileInfo />
        <Skills />
        <MainProjects />

            
              
      </div>
    </section>
    <Footer />
  </Container>
 </main>
  )
}
