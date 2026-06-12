"use client";

import { useEffect, useState } from "react";
import Footer from "../ui/footer";
import LineSlider from "../ui/Lineslider";
import NavigationBar from "../ui/nav";
import SolidButton from "../ui/solidbutton";
import { usePathname, useSearchParams } from "next/navigation";

type Product = {
  name: string,
  kind: string[],
  img: string,
  url: string
};

const products: Product[] = [
  {
    name: "Head End Control Unit",
    kind: ["Protection-System", "Pull-Switch-Safety", "Automation"],
    img: "/products/Head-End-Control-Unit.PNG",
    url: "#",
  },
  {
    name: "High-Speed Fiber Optic Cabling",
    kind: ["Fiber-Optic", "Cables"],
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
    kind: ["video-Systems", "Security", "Automation"],
    img: "/products/Embedded-DVR.PNG",
    url: "#",
  },
  {
    name: "NVR Surveillance",
    kind: ["video-Systems", "Security", "Automation"],
    img: "/products/NVR-Surveillance-Systems.PNG",
    url: "#",
  },
  {
    name: "Pull-Switch Safety Interlocks",
    kind: ["Personnel-Safety", "Pull-Switch-Safety", "Control"],
    img: "/products/Pull-Switch-Safety-Interlocks.PNG",
    url: "#",
  },
  {
    name: "Speed Switch BSD3000",
    kind: ["Devices-Tracking", "Position-Tracking"],
    img: "/products/Speed-Switch-BSD3000.PNG",
    url: "#",
  },
  {
    name: "Modular Limit Switches",
    kind: ["Devices-Tracking", "Position-Tracking", "Logic"],
    img: "/products/Modular-Limit-Switches.PNG",
    url: "#",
  },
  {
    name: "Industrial Valves",
    kind: ["High-Capacity", "Easy-Repair", "Control"],
    img: "/products/Industrial-Valves.PNG",
    url: "#",
  },
  {
    name: "Fluid Control",
    kind: ["Liquid-Sensors", "Industrial-Environment", "Automation", "Logic"],
    img: "/products/Fluid-Control.PNG",
    url: "#",
  },
  {
    name: "Vane Oil Pumps",
    kind: ["Heavy-Duty", "Control"],
    img: "/products/Vane-Oil-Pumps.PNG",
    url: "#",
  },
  {
    name: "Flow Metering",
    kind: ["Heavy-Duty", "routing", "Automation"],
    img: "/products/Flow-Metering.PNG",
    url: "#",
  },
  {
    name: "Liquid Level Monitoring",
    kind: ["Liquid-Sensors", "Industrial-Environment"],
    img: "/products/Liquid-Level-Monitoring.PNG",
    url: "#",
  },
  {
    name: "PLCs",
    kind: ["Automation", "Logic"],
    img: "/products/PLC.PNG",
    url: "#",
  },
  {
    name: "GSM Commander Wireless Telemetry",
    kind: ["Networks", "Control"],
    img: "/products/GSM-Commander-Wireless-Telemetry.PNG",
    url: "#",
  },
];

const emergency: Product[] = [
  {
    name: "Call Points",
    kind: ["Emergency", "Communicaions"],
    img: "/products/Call-Points.PNG",
    url: "#",
  },
  {
    name: "Ruggedized Industrial Telephones",
    kind: ["Emergency", "Communications"],
    img: "/products/Ruggedized-Industrial-Telephones.PNG",
    url: "#",
  },
];

const Categories: string[] = [
 "All", "Automation", "Logic", "Control",
"Heavy-Duty", "Security",
];

export default function Products() {

  const [filter, setFilter] = useState("");
  const [prods, setProds] = useState(products);
  const [emergs, setEmergs] = useState(emergency);
  const pathname = usePathname(); 
  const searchParams = useSearchParams(); // Gets query params
  
  const category = searchParams.get('category') ?? "";
  const _categories = category.split("#");

  useEffect(() => {
    const shortList: string[] = [];

    for (const prod of products) {
      for (const cat of _categories) {
        const name = cat.split("-").join(" ");
        if (prod.name === name) {
          for (const t of prod.kind) { shortList.push(t); }
        }
      }
    }

    for (const short of shortList) {
      if (Categories.includes(short)) {
        setProds((prev) => products.filter((product) => product.kind.includes(short)))
        break;
      }
    }
  }, []);

  useEffect(() => {
    if (filter.length == 0) {
      return;
    }

    if (filter === "All") {
      setProds([...products]);
    } else setProds((prev) => products.filter((product) => product.kind.includes(filter)))
  }, [filter])

  return (<div>
  <NavigationBar />
  <main>
      <p className="slider-header" style={{paddingTop: "1rem"}}>Product Line</p>
      <LineSlider />

      <div className="product-categories">
        {Categories.map((category, i) => {
          return <SolidButton key={i} text={category} className="category" onClick={() => { setFilter(category); }}/>
        })
        }
      </div>

      <div className="products">
        {prods.map((product, i) => {
          return        <div className="card card1" key={i}>
            <div className="card-image" style={{backgroundImage: `url('${product.img}')`}}></div>
            <div className="card-content">
                <p className="card-category">{product.kind.join("/")}</p>
                <h2 className="card-title">{product.name}</h2>
            </div>
        </div>
        })}
      </div>

      <p className="slider-header" style={{paddingTop: "1rem"}}>Emergency products</p>
      <LineSlider />
      <div className="products">
        {emergs.map((product, i) => {
          return        <div className="card card1" key={i}>
            <div className="card-image" style={{backgroundImage: `url('${product.img}')`}}></div>
            <div className="card-content">
                <p className="card-category">{product.kind.join("/")}</p>
                <h2 className="card-title">{product.name}</h2>
            </div>
        </div>
        })}
      </div>
    <Footer />
  </main>
  </div>);
}