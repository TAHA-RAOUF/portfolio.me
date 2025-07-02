import React from 'react';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <div 
      className={`floating-card ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animation: 'float 6s ease-in-out infinite'
      }}
    >
      {children}
    </div>
  );
};

export default FloatingCard;