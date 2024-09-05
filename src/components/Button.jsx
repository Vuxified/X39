
import React from 'react';
import './Button.css';

const Button = ({ text, link, variant = 'primary', disabled = false }) => {
    return (
        <a 
            href={link} 
            className={`btn ${variant}`} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => disabled && e.preventDefault()} /* Prevent navigation if disabled */
        >
            {text}
        </a>
    );
};

export default Button;