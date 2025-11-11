
import React from 'react';
import { Summary } from '../types';

interface SummaryCardProps {
  summary: Summary;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ summary }) => {
  return (
    <div>
      <p className="text-brand-text-secondary italic mb-4">"{summary.text}"</p>
      <div className="mt-4">
        <h4 className="font-semibold text-brand-text-primary mb-2">Key Topics:</h4>
        <div className="flex flex-wrap gap-2">
          {summary.topics.map((topic, index) => (
            <span key={index} className="bg-brand-primary/20 text-brand-primary text-xs font-semibold px-2.5 py-1 rounded-full">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
