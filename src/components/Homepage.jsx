import { useEffect, useState } from "react";
import effectiveImage from "../images/96effective.jpg";
import benefitsBlue from "../images/benefitsblue2.jpg";
import benefitsX39 from "../images/benefitsX39.jpg";
import infoX39 from "../images/infoX39.jpg";
import phototherapy from "../images/phototherapy.jpg";
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
      }, 500); // Duration of fade-out transition
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="main-container">
      {/* Hero Section */}
      <div className="text-container">
        <h1 className="highlighted-title">X39 Revolutionary Wearable Technology</h1>
        <p className="X39-info">
          Transform your health with X39:
            <ul>
              <li>Experience the X39: A revolutionary 30-day supply!</li>
              <li>Click "Buy Now" to start your journey to better health.</li>
              <li>For optimal results, a 90-day usage is recommended.</li>
              <li>
                Choose "Core" for a complete 90-day plan with a money-back guarantee.
              </li>
              <li>
                Prefer flexibility? Select "Preferred Customer" to enjoy a 30-day supply
                with the same 30-day money-back assurance.
              </li>
            </ul>
        </p>

        <div className="button-wrapper">
          <a
            href="https://lifewave.com/kristinasimms/enrollment/enrollerselection"
            className="button primary"
          >
            <span>Buy Now</span>
          </a>
          <a href="https://thisisitinfo.com/" className="button secondary">
            <span>Learn More</span>
          </a>
        </div>
      </div>
<div className="video-section">
        <h2 className="video-title">Watch the Science Behind X39</h2>
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/FgOGhc3sI7A"
            title="X39 Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Image Carousel Section */}
      <div className="content-wrapper">
        <div className="image-container">
          <img
            src={images[currentImageIndex]}
            alt="Benefits of X39"
            className={`fade ${fade ? "fade-in" : "fade-out"}`}
          />
          <p className="image-text">{imageTexts[currentImageIndex]}</p>
        </div>
      </div>


     
    </div>
  );
}

export default Homepage;
