import { useEffect, useState } from "react";
import effectiveImage from "../images/96effective.jpg";
import benefitsBlue from "../images/benefitsblue2.jpg";
import benefitsX39 from "../images/benefitsX39.jpg";
import infoX39 from "../images/infoX39.jpg";
import phototherapy from "../images/phototherapy.jpg";
import Button from "./Button";
import "./Homepage.css";

function Homepage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const images = [
    benefitsX39,
    infoX39,
    benefitsBlue,
    effectiveImage,
    phototherapy,
  ];

  const imageTexts = [
    "A state of complete physical, mental, and social well-being.",
    "Proven to improve organ system and nervous system.",
    "This patch provides health benefits.",
    "Recognized by the FDA and compliant as a 'general wellness product'.",
    "39 uses type of phototherapy.",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); // Duration of fade out transition
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="main-container">
      <div className="text-container">
        <div className="home-content">
          <h1 className="title">
            <i className="fas fa-bolt"></i> <span>The</span> <span>Power</span>{" "}
            <span>of</span> <span>X39</span>
          </h1>
          <div className="content-wrapper">
            <div className="text-content">
              <p className="X39-info">
                <b>X39</b> is a revolutionary wearable technology designed to
                activate your body&lsquo;s natural healing processes, promoting
                faster recovery, improved wellness, and a renewed sense of
                vitality.
              </p>
              <div className="button-wrapper">
                <Button
                  text="Buy Now"
                  link="https://lifewave.com/kristinasimms/enrollment/enrollerselection"
                  variant="primary"
                />
                <Button
                  text="Learn More"
                  link="https://thisisitinfo.com/"
                  variant="secondary"
                />
              </div>
            </div>
            <div className="image-container">
              <img
                src={images[currentImageIndex]}
                alt="Benefits of X39"
                className={`fade ${fade ? "fade-in" : "fade-out"}`}
              />
              <p
                className="image-text fadeUp"
                key={currentImageIndex} /* Force re-render with key */
              >
                {imageTexts[currentImageIndex]}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
