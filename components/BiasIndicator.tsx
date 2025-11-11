
import React from 'react';

interface BiasIndicatorProps {
  score: number; // -1 to 1
}

const BiasIndicator: React.FC<BiasIndicatorProps> = ({ score }) => {
  const percentage = (score + 1) * 50;

  const getLabel = () => {
    if (score < -0.6) return 'Strongly Negative';
    if (score < -0.2) return 'Slightly Negative';
    if (score > 0.6) return 'Strongly Positive';
    if (score > 0.2) return 'Slightly Positive';
    return 'Neutral';
  };

  return (
    <div className="w-full">
      <div className="relative h-4 w-full bg-gray-700 rounded-full overflow-hidden">
        <div className="absolute h-full w-full flex justify-between items-center text-xs px-2 text-white">
            <span className="font-bold">Negative</span>
            <span className="font-bold">Positive</span>
        </div>
        <div
          className="absolute top-0 h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"
          style={{ width: '100%' }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-full shadow-lg transform -translate-x-1/2"
          style={{ left: `${percentage}%`, transition: 'left 0.5s ease-out' }}
        />
      </div>
      <p className="text-center mt-3 font-semibold text-brand-text-primary">{getLabel()}</p>
      <p className="text-center text-sm text-brand-text-secondary">Score: {score.toFixed(2)}</p>
    </div>
  );
};

export default BiasIndicator;
