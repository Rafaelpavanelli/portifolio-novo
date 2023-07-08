import React, { useState, useEffect } from 'react';

export const TypingEffect = ({ text,timing }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, timing); // Ajuste a velocidade do efeito aqui (em milissegundos)

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, text,timing]);

  return <span>{displayText}</span>;
};


