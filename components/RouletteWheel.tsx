import React, { useMemo } from 'react';
import type { Prize } from '../types';
import { SPIN_DURATION_MS } from '../constants';

interface RouletteWheelProps {
  prizes: Prize[];
  rotation: number;
}

const RouletteWheel: React.FC<RouletteWheelProps> = ({ prizes, rotation }) => {
  const segmentCount = prizes.length;
  const segmentAngle = 360 / segmentCount;

  const conicGradientStyle = useMemo(() => {
    const gradientParts = prizes.map((prize, index) => {
      const startAngle = index * segmentAngle;
      const endAngle = (index + 1) * segmentAngle;
      return `${prize.color} ${startAngle}deg ${endAngle}deg`;
    });
    return {
      background: `conic-gradient(from 0deg, ${gradientParts.join(', ')})`,
    };
  }, [prizes, segmentAngle]);

  return (
    <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full flex items-center justify-center shadow-2xl border-8 border-white">
      <div
        className="absolute w-full h-full rounded-full transition-transform duration-[6000ms] ease-out"
        style={{
          ...conicGradientStyle,
          transform: `rotate(${rotation}deg)`,
          transitionDuration: `${SPIN_DURATION_MS}ms`
        }}
      >
        {prizes.map((prize, index) => {
          const angle = segmentAngle * index + segmentAngle / 2;
          const rotateContainerStyle = {
            transform: `rotate(${angle}deg)`,
          };
          
          const isBottomHalf = angle > 90 && angle < 270;
          
          const textStyle: React.CSSProperties = {
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            whiteSpace: 'pre-line',
            textAlign: 'center',
            transform: `translateX(-50%) ${isBottomHalf ? 'rotate(180deg)' : ''}`,
            lineHeight: '1',
          };

          return (
            <div
              key={prize.id}
              className="absolute top-0 left-0 w-full h-full"
              style={rotateContainerStyle}
            >
              <span
                className="absolute top-[8%] left-1/2 text-white font-black text-xs md:text-sm drop-shadow-md"
                style={textStyle}
              >
                {prize.text.toUpperCase()}
              </span>
            </div>
          );
        })}
      </div>

      <div className="absolute w-20 h-20 md:w-28 md:h-28 bg-white rounded-full border-4 border-yellow-300 flex items-center justify-center text-center text-green-800 font-black text-xs md:text-sm shadow-inner">
        GIRE &<br/>GANHE!
      </div>
    </div>
  );
};

export default RouletteWheel;