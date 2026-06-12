import ContactForm from "../ui/contactform";
import Footer from "../ui/footer";
import NavigationBar from "../ui/nav";

export default function About() {
  return (<div>
  <NavigationBar/>
  <main>
      <ContactForm />
      <Footer/>
  </main>
  </div>);
}
