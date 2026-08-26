import React from 'react';

interface KiberLogoIconProps {
  className?: string;
  size?: number;
}

export function KiberLogoIcon({ className = "w-8 h-8 text-[#f18719]", size }: KiberLogoIconProps) {
  const style = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  return (
    <svg 
      viewBox="0 0 110 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path 
        d="M 18 20 L 52 50 L 18 80" 
        stroke="currentColor" 
        strokeWidth="18" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M 54 20 L 88 50 L 54 80" 
        stroke="currentColor" 
        strokeWidth="18" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export default KiberLogoIcon;
