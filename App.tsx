
import React, { useState, useCallback } from 'react';
import { AnalysisResult } from './types';
import { analyzeTextWithGemini } from './services/geminiService';
import Header from './components/Header';
import ResultsDashboard from './components/ResultsDashboard';
import { Loader2, AlertTriangle, Search } from 'lucide-react';

const App: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(async () => {
    if (!text.trim()) {
      setError('Please enter some text to analyze.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const result = await analyzeTextWithGemini(text);
      setAnalysisResult(result);
    } catch (err) {
      console.error(err);
      setError('An error occurred during analysis. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  }, [text]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleAnalyze();
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary font-sans flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col">
        <div className="bg-brand-surface rounded-xl shadow-2xl p-6 md:p-8 flex flex-col flex-grow">
          <h2 className="text-xl md:text-2xl font-bold text-brand-text-primary mb-4">Enter Text to Analyze</h2>
          <p className="text-brand-text-secondary mb-6">
            Paste your text below and TruthLens will provide a detailed analysis of its factuality, bias, and origins.
          </p>
          <div className="relative flex-grow flex flex-col">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Paste an article, a social media post, or any text you want to verify..."
              className="w-full flex-grow bg-gray-900 border-2 border-gray-700 rounded-lg p-4 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-300 resize-none text-base"
              rows={10}
            />
            <p className="text-xs text-gray-500 mt-2 text-right">Press Ctrl+Enter or Cmd+Enter to analyze.</p>
          </div>
          <div className="mt-6">
            <button
              onClick={handleAnalyze}
              disabled={isLoading || !text.trim()}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-brand-primary hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  Analyze Text
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-8">
          {error && (
            <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg relative flex items-center gap-3" role="alert">
              <AlertTriangle className="h-5 w-5" />
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {!isLoading && !error && !analysisResult && (
             <div className="text-center py-16 px-6 bg-brand-surface rounded-xl">
                <h3 className="text-2xl font-bold text-brand-text-primary">Your Analysis Dashboard</h3>
                <p className="text-brand-text-secondary mt-2">Results will appear here once you analyze a piece of text.</p>
            </div>
          )}
          
          {analysisResult && <ResultsDashboard result={analysisResult} />}
        </div>
      </main>
      <footer className="text-center p-4 text-brand-text-secondary text-sm">
        Powered by Google Gemini.
      </footer>
    </div>
  );
};

export default App;
