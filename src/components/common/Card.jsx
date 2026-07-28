import React from 'react';

export function Card({ children, className = '', hoverable = true, ...props }) {
  return (
    <div
      className={`glass-card ${className}`}
      style={{ padding: '1.5rem', ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
}
