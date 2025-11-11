
import React from 'react';

interface ScoreGaugeProps {
  score: number;
}

const ScoreGauge: React.FC<ScoreGaugeProps> = ({ score }) => {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  const getColor = () => {
    if (score > 75) return 'stroke-green-500';
    if (score > 40) return 'stroke-yellow-500';
    return 'stroke-red-500';
  };
  
  const getTextDescription = () => {
    if (score > 85) return "Very High Confidence";
    if (score > 65) return "High Confidence";
    if (score > 40) return "Moderate Confidence";
    if (score > 20) return "Low Confidence";
    return "Very Low Confidence";
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-700"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <circle
            className={`transform -rotate-90 origin-center ${getColor()}`}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-brand-text-primary">
          {score}
        </span>
      </div>
       <p className={`mt-2 text-sm font-semibold ${getColor().replace('stroke-', 'text-')}`}>
        {getTextDescription()}
      </p>
    </div>
  );
};

export default ScoreGauge;
