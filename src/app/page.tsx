import NavigationBar from "./ui/nav";
import Hero from "./ui/hero";
import ProductSlider from "./ui/productslider";
import Footer from "./ui/footer";

export default function Home() {
  return (<div>
  <NavigationBar />
  <main>
      <Hero />
      <ProductSlider />
      <Footer />
  </main>
  </div>);
}
