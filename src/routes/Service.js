import Navbar from "../components/Navbar"
import Hero from "../components/Hero";

function Service(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1528502668750-88ba58015b2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Service"
        btnClass="hide"      
        />
        </>
    )
}

export default Service;