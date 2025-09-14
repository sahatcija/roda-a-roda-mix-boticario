import React, { useState, useCallback } from 'react';
import { PRIZES, SPIN_DURATION_MS } from './constants';
import type { Prize } from './types';
import RouletteWheel from './components/RouletteWheel';
import PrizeModal from './components/PrizeModal';
import BoticarioLogo from './components/BoticarioLogo';
import MixFmLogo from './components/MixFmLogo';

const App: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [winner, setWinner] = useState<Prize | null>(null);

  const handleSpin = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    setWinner(null);

    const winnerIndex = Math.floor(Math.random() * PRIZES.length);
    const segmentAngle = 360 / PRIZES.length;
    
    // Add 5-8 full spins for visual effect
    const fullSpins = 5 + Math.floor(Math.random() * 3);
    
    // Calculate the final angle to point the middle of the winner segment to the top
    const winningAngle = 360 - (winnerIndex * segmentAngle + segmentAngle / 2);
    
    // Add a small random offset to not always land perfectly in the middle
    const randomOffset = (Math.random() - 0.5) * segmentAngle * 0.8;

    const finalRotation = rotation + (fullSpins * 360) + winningAngle + randomOffset;
    
    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const actualWinner = PRIZES[winnerIndex];
      if (actualWinner.text !== 'Tente\nOutra Vez') {
        setWinner(actualWinner);
      }
    }, SPIN_DURATION_MS);
  }, [isSpinning, rotation]);

  const closeModal = () => {
    setWinner(null);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden">
      <header className="w-full max-w-lg mx-auto flex justify-center items-center mb-16">
        <BoticarioLogo className="h-16 w-auto text-white" />
      </header>

      <main className="relative flex flex-col items-center justify-center">
        <div 
          className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20"
          style={{ filter: 'drop-shadow(0 4px 3px rgba(0,0,0,0.3))' }}
        >
          <div className="w-0 h-0 
            border-l-[18px] border-l-transparent
            border-r-[18px] border-r-transparent
            border-t-[30px] border-t-red-600">
          </div>
          <div className="w-4 h-4 rounded-full bg-white absolute top-[-26px] left-1/2 -translate-x-1/2 border-2 border-red-600"></div>
        </div>
        
        <RouletteWheel prizes={PRIZES} rotation={rotation} />
        
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className="mt-10 px-12 py-4 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold text-2xl rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75 disabled:bg-gray-400 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed disabled:scale-100"
        >
          {isSpinning ? 'GIRANDO...' : 'GIRAR ROLETA'}
        </button>

        <MixFmLogo className="mt-8 mb-8 h-20 w-auto" />
      </main>

      <footer className="absolute bottom-4 text-center text-white text-sm opacity-80">
        <p>Uma ação O Boticário na Mix FM!</p>
      </footer>
      
      {winner && <PrizeModal prize={winner} onClose={closeModal} />}
    </div>
  );
};

export default App;