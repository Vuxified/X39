import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import "./Contact.css";

const ContactPage = () => {
  const formRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          () => {
            setIsLoading(false);
            formRef.current.reset();
            setIsSuccess(true);
            setIsError(false);
          },
          (error) => {
            console.log(error);
            setIsLoading(false);
            formRef.current.reset();
            setIsError(true);
            setIsSuccess(false);
          }
        );
    }
  };

  return (
    <div className="contact-page ">
      <div className="container">
        <div className="contact-text">
          <h2 className="title">Contact Us</h2>
          <p className="subtitle">
            We&lsquo;d love to hear from you. Drop us a line and we&lsquo;ll get
            back to you as soon as possible.
          </p>
        </div>
        <div className="content">
          <div className="form-section">
            {!isSuccess ? (
              <>
                <h2>Send us a message</h2>
                <form onSubmit={handleSubmit} ref={formRef}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    placeholder="John Doe"
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="johndoe@gmail.com"
                    required
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your message"
                    required
                  ></textarea>
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                  {isError && (
                    <p className="error-message">
                      Something went wrong! Try again later.
                    </p>
                  )}
                </form>
              </>
            ) : (
              <div className="success-message">
                <h3>Message sent successfully!</h3>
                <p>We will get back to you as soon as possible.</p>
              </div>
            )}
          </div>
          <div className="info-section">
            <h2>Contact Information</h2>
            <div className="contact-info">
              <div className="info-item">
                <HiOutlineEnvelope className="icon" />
                <span>contact@example.com</span>
              </div>
              <div className="info-item">
                <IoCallOutline className="icon" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="social-links">
              <h3>Follow us</h3>
              <div className="social-icons">
                <a href="#" aria-label="Facebook">
                  <FaFacebookF className="social-icon" />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaXTwitter className="social-icon" />
                </a>
                <a href="#" aria-label="TikTok">
                  <FaTiktok className="social-icon" />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="social-icon" />
                </a>
              </div>
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
};

export default ContactPage;
