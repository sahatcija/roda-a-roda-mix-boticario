import React from 'react';

const BoticarioLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 320 60"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <text
      x="50%"
      y="30"
      textAnchor="middle"
      fontFamily="Montserrat, sans-serif"
      fontSize="28"
      fontWeight="900"
      letterSpacing="1"
    >
      ROLETA PREMIADA
    </text>
    <text
      x="50%"
      y="55"
      textAnchor="middle"
      fontFamily="Montserrat, sans-serif"
      fontSize="18"
      fontWeight="400"
      fillOpacity="0.8"
    >
      O Boticário
    </text>
  </svg>
);

export default BoticarioLogo;