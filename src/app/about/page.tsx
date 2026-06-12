"use client";

import ContactForm from "../ui/contactform";
import Footer from "../ui/footer";
import LineSlider from "../ui/Lineslider";
import NavigationBar from "../ui/nav";
import Logo from  "@/assets/logo-blank.png"

export default function About() {
  return (<div>
  <NavigationBar/>
  <main>
      <p className="slider-header" style={{paddingTop: "1rem"}}>More about us</p>
      <LineSlider />

      <div style={{display: "flex", flexDirection: "column", padding: "1rem"}}>
        <div style={{display: "flex", flexDirection: "row"}}>
          <img src={Logo.src} />
          <div>We are <span style={{color: "orange", fontWeight: "bold"}}>Profibercom</span>!
           We deliver state-of-the-art equipment and
integrated systems that prioritize safety, efficiency, and uninterrupted connectivity
          </div>
          <div>
            Our approach is centered on providing end-to-end solutions from the installation of high-speed communication
backbones to the deployment of intelligent conveyor protection systems
          </div>
        </div>

        <p style={{paddingTop: "1rem", fontSize: "20px"}}>Vision and Mission</p>

        <p style={{paddingTop: "2rem", fontSize: "16px", fontWeight: "bold"}}>Vision </p>
        <p>Our vision is to be the leading industrial technology partner in Africa, driving innovation in safety, control systems, and
telecommunications, ensuring zero-harm environments and maximized operational uptime for our clients</p>
        
        <p style={{paddingTop: "2rem", fontSize: "16px", fontWeight: "bold"}}>Mission</p>
        <p>Our mission is to Deliver robust, high-performance Control and Instrumentation solutions tailored to complex industrial
environments.</p>
        <p></p> Implement cutting-edge communication and networking systems to enhance site-wide connectivity.
      </div>

      <Footer/>
  </main>
  </div>);
}
