import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance to glitch
        setIsGlitching(true);
        let iterations = 0;
        const glitchInterval = setInterval(() => {
          setGlitchText(
            text
              .split('')
              .map((char, index) => {
                if (index < iterations) {
                  return text[index];
                }
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
              })
              .join('')
          );

          if (iterations >= text.length) {
            clearInterval(glitchInterval);
            setGlitchText(text);
            setIsGlitching(false);
          }

          iterations += 1 / 3;
        }, 30);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`${className} ${isGlitching ? 'text-shadow-glitch' : ''}`}>
      {glitchText}
    </span>
  );
};

export default GlitchText;