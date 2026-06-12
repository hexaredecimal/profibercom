"use client";

import Footer from "../ui/footer";
import LineSlider from "../ui/Lineslider";
import NavigationBar from "../ui/nav";
import SolidButton from "../ui/solidbutton";

type Product = {
  name: string,
  kind: string[],
  img: string,
  url: string
};

const products: Product[] = [
  {
    name: "Head End Control Unit",
    kind: ["Networks", "Communicaions"],
    img: "/products/Head-End-Control-Unit.PNG",
    url: "#",
  },
  {
    name: "High-Speed Fiber Optic Cabling",
    kind: ["Networks", "Communicaions"],
    img: "/products/High-Speed-Fiber-Optic-Cabling.PNG",
    url: "#",
  },
  {
    name: "Industrial Network Switching",
    kind: ["Networks", "Communicaions"],
    img: "/products/Industrial-Network-Switching.PNG",
    url: "#",
  },
  {
    name: "Embedded DVR",
    kind: ["Networks", "Communicaions"],
    img: "/products/Embedded-DVR.PNG",
    url: "#",
  },
  {
    name: "NVR Surveillance Systems",
    kind: ["Networks", "Communicaions"],
    img: "/products/NVR-Surveillance-Systems.PNG",
    url: "#",
  },
  {
    name: " Pull-Switch Safety Interlocks",
    kind: ["Networks", "Communicaions"],
    img: "/products/Pull-Switch-Safety-Interlocks.PNG",
    url: "#",
  },
  {
    name: "Speed Switch BSD3000",
    kind: ["Networks", "Communicaions"],
    img: "/products/Speed-Switch-BSD3000.PNG",
    url: "#",
  },
  {
    name: "High-Speed Fiber Optic Cabling",
    kind: ["Networks", "Communicaions"],
    img: "/products/High-Speed-Fiber-Optic-Cabling.PNG",
    url: "#",
  },
  {
    name: "Modular Limit Switches",
    kind: ["Networks", "Communicaions"],
    img: "/products/Modular-Limit-Switches.PNG",
    url: "#",
  },
  {
    name: "Industrial Valves",
    kind: ["Networks", "Communicaions"],
    img: "/products/Industrial-Valves.PNG",
    url: "#",
  },
  {
    name: "Fluid Control",
    kind: ["Networks", "Communicaions"],
    img: "/products/Fluid-Control.PNG",
    url: "#",
  },
  {
    name: "High-Speed Fiber Optic Cabling",
    kind: ["Networks", "Communicaions"],
    img: "/products/High-Speed-Fiber-Optic-Cabling.PNG",
    url: "#",
  },
  {
    name: "Vane Oil Pumps",
    kind: ["Networks", "Communicaions"],
    img: "/products/Vane-Oil-Pumps.PNG",
    url: "#",
  },
  {
    name: "Flow Metering",
    kind: ["Networks", "Communicaions"],
    img: "/products/Flow-Metering.PNG",
    url: "#",
  },
  {
    name: "Liquid Level Monitoring",
    kind: ["Networks", "Communicaions"],
    img: "/products/Liquid-Level-Monitoring.PNG",
    url: "#",
  },
  {
    name: "PLCs",
    kind: ["Networks", "Communicaions"],
    img: "/products/PLC.PNG",
    url: "#",
  },
  {
    name: "GSM Commander Wireless Telemetry",
    kind: ["Networks", "Communicaions"],
    img: "/products/GSM-Commander-Wireless-Telemetry.PNG",
    url: "#",
  },
  {
    name: "Ruggedized Industrial Telephones",
    kind: ["Networks", "Communicaions"],
    img: "/products/Ruggedized-Industrial-Telephones.PNG",
    url: "#",
  },
  {
    name: "Call Points",
    kind: ["Networks", "Communicaions"],
    img: "/products/Call-Points.PNG",
    url: "#",
  },
  {
    name: "Radio Communications: Transmitter/Receiver Repeate",
    kind: ["Networks", "Communicaions"],
    img: "/products/Radio-Communications.PNG",
    url: "#",
  },
];

export default function Products() {
  return (<div>
  <NavigationBar />
  <main>
      <p className="slider-header" style={{paddingTop: "1rem"}}>Product Line</p>
      <LineSlider />

      <div className="product-categories">
        <SolidButton text={"Instrumentation"} className="category"/>
        <SolidButton text={"Conveyor Safety"} className="category"/>
        <SolidButton text={"Communication"} className="category"/>
        <SolidButton text={"Data Infra"} className="category"/>
        <SolidButton text={"Security"} className="category"/>
        <SolidButton text={"Control devices"} className="category"/>
      </div>

      <div className="products">
        {products.map((product) => {
          return        <div className="card card1">
            <div className="card-image" style={{backgroundImage: `url('${product.img}')`}}></div>
            <div className="card-content">
                <p className="card-category">{product.kind.join(",")}</p>
                <h2 className="card-title">{product.name}</h2>
            </div>
        </div>
        })}
      </div>
    <Footer />
  </main>
  </div>);
}