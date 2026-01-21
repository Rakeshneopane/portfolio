import Navbar from "./Navbar";
import MainSection from "./MainSection";
import Projects from "./Projects";
import TechSection from "./TechSection";
import Connect from "./Connect"
import Footer from "./Footer";

export default function Home(){
    return(
        <>
            <Navbar/>
            <main>
                <section id="hero">
                    <MainSection />
                </section>
                
                <section id="projects">
                    <Projects/>
                </section>
               
                <section id="skills">
                    <TechSection />
                </section>
                
                <section id="contact">
                    <Connect />
                </section>
                <Footer />
            </main>
        </>
    )
}