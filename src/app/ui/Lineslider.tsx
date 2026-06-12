import { useEffect, useState } from "react";
export default function LineSlider() {
  const colors= ["orange", "white", "black"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % colors.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return <div className="slider">
      <div
        className="track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {colors.map((color, i) => (
          <div className="slide" style={{backgroundColor: color}} key={i}>
          </div>
        ))}
      </div></div>;
}