
import React from 'react';
import { AnalysisResult } from '../types';
import AnalysisRadarChart from './AnalysisRadarChart';
import ScoreGauge from './ScoreGauge';
import BiasIndicator from './BiasIndicator';
import AuthorshipBadge from './AuthorshipBadge';
import SummaryCard from './SummaryCard';
import SourcesList from './SourcesList';
import { BarChart2, BookOpen, Cpu, FileText } from 'lucide-react';

interface ResultsDashboardProps {
  result: AnalysisResult;
}

const Card: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-brand-surface rounded-xl shadow-lg p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
            {icon}
            <h3 className="text-lg font-semibold text-brand-text-primary">{title}</h3>
        </div>
        <div className="flex-grow">{children}</div>
    </div>
);

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ result }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      <div className="md:col-span-2 lg:col-span-1">
        <Card title="Overall Analysis" icon={<BarChart2 className="h-6 w-6 text-brand-primary" />}>
            <AnalysisRadarChart result={result} />
        </Card>
      </div>

      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Factual Accuracy" icon={<BookOpen className="h-6 w-6 text-brand-accent" />}>
            <ScoreGauge score={result.factuality.score} />
            <p className="text-sm text-brand-text-secondary mt-4">{result.factuality.explanation}</p>
        </Card>

        <Card title="Bias Detection" icon={<FileText className="h-6 w-6 text-brand-secondary" />}>
            <BiasIndicator score={result.bias.score} />
            <p className="text-sm text-brand-text-secondary mt-4">{result.bias.summary}</p>
        </Card>
      </div>

      <div className="md:col-span-2 lg:col-span-3">
          <Card title="Summary & Topics" icon={<FileText className="h-6 w-6 text-yellow-400" />}>
              <SummaryCard summary={result.summary} />
          </Card>
      </div>

      <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-1">
            <Card title="AI Authorship" icon={<Cpu className="h-6 w-6 text-pink-500" />}>
                <AuthorshipBadge classification={result.authorship.classification} />
            </Card>
        </div>
        <div className="lg:col-span-1">
            <SourcesList sources={result.sources} />
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;
