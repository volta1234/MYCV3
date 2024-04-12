import React from 'react';

const BowTieIcon = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill={color}
    >
      <path d="M50,20 L80,50 L50,80 L20,50 Z" />
      <path d="M20,50 L80,50" stroke={color} strokeWidth="8" />
    </svg>
  );
};

export default BowTieIcon;
