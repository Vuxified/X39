import React from 'react';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestimonialsCard = ({ title, videoUrl, author }) => {
  return (
    <div className="testimonial-card">
      <h3>{title}</h3>
      <div className="video-container">
        <iframe
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <strong>{author}</strong>
      <div className="stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      title: 'Great Service',
      videoUrl: 'https://www.youtube.com/embed/dzQFUd-10ns?si=WmZ8YtYxyinNHePs', 
      author: 'John Doe',
    },
    {
      title: 'Highly Recommend',
      videoUrl: 'https://www.youtube.com/embed/bkvHpvB4IlU?si=uHKdsrwF8Ef88n-n', 
      author: 'Bob Smith',
    },
    {
      title: 'Will Return',
      videoUrl: 'https://www.youtube.com/embed/0x9u5aX9upo?si=bz7GxXkrVQGD0Dqx', 
      author: 'Delsyn V',
    },
    {
      title: 'Great Service',
      videoUrl: 'https://www.youtube.com/embed/dzQFUd-10ns?si=WmZ8YtYxyinNHePs', 
      author: 'John Doe',
    },
    {
      title: 'Highly Recommend',
      videoUrl: 'https://www.youtube.com/embed/bkvHpvB4IlU?si=uHKdsrwF8Ef88n-n', 
      author: 'Bob Smith',
    },
    {
      title: 'Will Return',
      videoUrl: 'https://www.youtube.com/embed/0x9u5aX9upo?si=bz7GxXkrVQGD0Dqx', 
      author: 'Delsyn V',
    },
  
  ];

  return (
    <div className="testimonials-wrapper">
      <h2 className="testimonials-heading">Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialsCard
            key={index}
            title={testimonial.title}
            videoUrl={testimonial.videoUrl}
            author={testimonial.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
