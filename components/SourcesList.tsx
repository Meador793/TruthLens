
import React from 'react';
import { GroundingSource } from '../types';
import { Globe } from 'lucide-react';

interface SourcesListProps {
  sources: GroundingSource[];
}

const SourcesList: React.FC<SourcesListProps> = ({ sources }) => {
  if (sources.length === 0) {
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
      <ul className="space-y-2 overflow-y-auto max-h-48 pr-2">
        {sources.map((source, index) => (
          <li key={index} className="text-sm">
            <a
              href={source.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
            >
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourcesList;
