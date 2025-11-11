import React from 'react';
import { GroundingSource } from '../types';
import { Globe } from 'lucide-react';

interface SourcesListProps {
  sources: GroundingSource[];
}

const CredibilityBadge: React.FC<{ credibility: GroundingSource['credibility'] }> = ({ credibility }) => {
  const getCredibilityStyles = () => {
    switch (credibility) {
      case 'High':
        return 'bg-green-500/20 text-green-400';
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Low':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${getCredibilityStyles()}`}>
      {credibility}
    </span>
  );
};


const SourcesList: React.FC<SourcesListProps> = ({ sources }) => {
  if (!sources || sources.length === 0) {
    return (
      <div className="bg-brand-surface rounded-xl shadow-lg p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
            <Globe className="h-6 w-6 text-gray-500" />
            <h3 className="text-lg font-semibold text-brand-text-primary">Sources</h3>
        </div>
        <p className="text-sm text-brand-text-secondary">No external sources were used for this analysis.</p>
      </div>
    );
  }

  return (
    <div className="bg-brand-surface rounded-xl shadow-lg p-6 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
          <Globe className="h-6 w-6 text-brand-primary" />
          <h3 className="text-lg font-semibold text-brand-text-primary">Sources Consulted</h3>
      </div>
      <ul className="space-y-3 overflow-y-auto max-h-48 pr-2">
        {sources.map((source, index) => (
          <li key={index} className="text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <a
              href={source.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors truncate"
              title={source.title}
            >
              {source.title}
            </a>
            <CredibilityBadge credibility={source.credibility} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourcesList;