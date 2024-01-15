import Navbar from "../components/Navbar"
import Hero from "../components/Hero";


function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="#let's_talk"
        text="LEAVE A MESSAGE, We love to hear from you!"
        btnClass="hide"      
        />
        </>
    )
}

export default Contact;