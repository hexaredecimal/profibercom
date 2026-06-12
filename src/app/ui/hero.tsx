"use client";

import { useEffect } from "react";
import Logo from  "@/assets/logo-blank.png"

type ImageBoard = {
    A: string,
    B: string,
    C: string,
    D: string,
}
const imageboard: ImageBoard = {
    A: "GPON Headends",
    B: "Head End Control Unit",
    C: "High-Speed Fiber Optic Cabling",
    D: "Embedded DVR"
};

export default function Hero() {
    useEffect(() => {
        const interval = setInterval(() => {
            document
                .querySelector(".hr-style")
                ?.classList.toggle("hr-rotate");

            document
                .querySelector(".text-1-tleft")
                ?.classList.toggle("t1thide");

            document
                .querySelector(".text-1-bright")
                ?.classList.toggle("t1bhide");

            document
                .querySelector(".text-2-tright")
                ?.classList.toggle("t2tshow");

            document
                .querySelector(".text-2-bleft")
                ?.classList.toggle("t2bshow");
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-contain">
            <div className="text text-1-tleft"><p>{imageboard.A}</p></div>
            <div className="text text-1-bright"><p>{imageboard.B}</p></div>
            <div className="text text-2-tright"><p>{imageboard.C}</p></div>
            <div className="text text-2-bleft"><p>{imageboard.D}</p></div> 

            <div className="circle">
                <img src={Logo.src} />
            </div>
            <hr className="hr-style" />
            <div className="overlay"></div>
         </div>
    );
}