
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { AnalysisResult } from '../types';

interface AnalysisRadarChartProps {
  result: AnalysisResult;
}

const AnalysisRadarChart: React.FC<AnalysisRadarChartProps> = ({ result }) => {
  const data = [
    { subject: 'Factuality', value: result.factuality.score, fullMark: 100 },
    { subject: 'Objectivity', value: (1 - Math.abs(result.bias.score)) * 100, fullMark: 100 },
    { subject: 'Human-like', value: result.authorship.classification === 'Likely human-written' ? 100 : (result.authorship.classification === 'Unclear' ? 50 : 0), fullMark: 100 },
    { subject: 'Positive Tone', value: (result.summary.sentiment + 1) * 50, fullMark: 100 },
  ];

  return (
    <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#4b5563" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#e5e7eb', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#9ca3af', fontSize: 10 }} />
            <Radar name="Analysis Score" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
            <Tooltip
                contentStyle={{
                    backgroundColor: '#1e1e1e',
                    borderColor: '#3b82f6',
                    color: '#e5e7eb'
                }}
            />
            </RadarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default AnalysisRadarChart;
