"use client";

import Footer from "../ui/footer";
import LineSlider from "../ui/Lineslider";
import NavigationBar from "../ui/nav";

type Service = {
  name: string,
  img: string,
  url: string
};

const services: Service[] = [
  {
    name: "Control & Instrumentation",
    img: "/products/Head-End-Control-Unit.PNG",
    url: "#",
  },
  {
    name: "Telecommunications Services",
    img: "/products/Ruggedized-Industrial-Telephones.PNG",
    url: "#",
  },
  {
    name: "Safety & Protection",
    img: "/products/Call-Points.PNG",
    url: "#",
  },
  {
    name: "Security Installation",
    img: "/products/Embedded-DVR.PNG",
    url: "#",
  },
];


export default function Services() {
  return (<div>
  <NavigationBar />
  <main>

      <p className="slider-header" style={{paddingTop: "1rem"}}>Services</p>
      <LineSlider />

      <div className="products">
        {services.map((product) => {
          return        <div className="card card1">
            <div className="card-image" style={{backgroundImage: `url('${product.img}')`}}></div>
            <div className="card-content">
                <h2 className="card-title">{product.name}</h2>
            </div>
        </div>
        })}
      </div>


      <Footer />
  </main>
  </div>);
}
