import Navbar from "./Navbar";
import MainSection from "./MainSection";
import Projects from "./Projects";
import TechSection from "./TechSection";
import Connect from "./Connect"
import Footer from "./Footer";

export default function Home(){
    return(
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1">
                <MainSection />
                <Projects/>
                <TechSection />                
                <Connect />
                <Footer />
            </main>
        </div>
    )
}